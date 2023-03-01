import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Header from "../../UserComponents/Header/Header";
import ChatOnline from "../ChatOnline/ChatOnline";
import Conversation from "../Conversation/Conversation";
import Message from "../Message/Message";
import {
  getConversation,
  getMessages,
  postMessages,
} from "../../../helper/UsersChatHelper";
import { io } from "socket.io-client";
import "./Messenger.css";
import SearchBar from "./SearchBar";

function Messenger() {
  const { userDetails } = useSelector((state) => state.user);
  const [conversations, setConversations] = useState([]);
  const { tokenData } = useSelector((state) => state.user);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const scrollRef = useRef(); //which is used for automatically scroll up when a message is send
  const socket = useRef(io("ws://localhost:8080"));
  const [ value , setValue ] = useState('')



  useEffect(() => {
    socket.current = io("ws://localhost:8080");
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    socket.current.emit("addUser", userDetails._id);
    socket.current.on("getUsers", (users) => {
    });
  }, [userDetails]);

  useEffect(() => {
    try {
      (async () => {
        const res = await getConversation(userDetails?._id, tokenData);
        setConversations(res);
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    try {
      (async () => {
        const res = await getMessages(currentChat?._id, tokenData);
        setMessages(res);
      })();
    } catch (error) {
      console.log(error);
    }
  }, [currentChat]);

  const handleSubmit = async (e) => {   
    e.preventDefault();
    const message = {
      conversationId: currentChat._id,
      sender: userDetails._id,
      text: newMessage,
    };

    //sending messages to socket server
    const recieverId = currentChat?.members?.find(
      (member) => member !== userDetails._id
    );
    socket.current.emit("sendMessage", {
      senderId: userDetails._id,
      recieverId,
      text: newMessage,
    });
    try {
      const res = await postMessages(message);
      setMessages([...messages, res]);
      setNewMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleDataFromChild = (data)=>{
    setDataFromChild(data)
  }

  return (
    <>
      <Header />
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
           <SearchBar onData={handleDataFromChild}/>
            {conversations?.map((c) => (
              <div onClick={() => setCurrentChat(c)}>
                <Conversation conversation={c} />
              </div>
            ))}
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            {currentChat ? (
              <>
                {" "}
                <div className="chatBoxTop">
                  {messages?.map((m) => (
                    <div ref={scrollRef}>
                      <Message
                        message={m}
                        own={m?.sender === userDetails._id}
                      />
                    </div>
                  ))}
                </div>
                <div className="chatBoxBottom">
                  <textarea 
                    className="chatMessageInput"
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                    placeholder="write Something...."
                  ></textarea>
                  <button onClick={handleSubmit} className="chatSubmitButton">
                    Send
                  </button>
                </div>
              </>
            ) : (
              <span className="noConversationText">
                Open a conversation to start a chat
              </span>
            )}
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <ChatOnline />
          </div>
        </div>
      </div>
    </>
  );
}

export default Messenger;
