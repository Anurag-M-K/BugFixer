import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Header from "../../UserComponents/Header/Header";
import ChatOnline from "../ChatOnline/ChatOnline";
import Conversation from "../Conversation/Conversation";
import InputEmoji from "react-input-emoji";
import Message from "../Message/Message";
import {
  getConversation,
  getMessages,
  postMessages,
} from "../../../helper/UsersChatHelper";
import { io } from "socket.io-client";
import { MdOutlineAttachFile } from "react-icons/md";
import { GrSend } from "react-icons/gr";
import SearchBar from "./SearchBar";
import { BiVideoPlus, BiImageAdd } from "react-icons/bi";
import "./Messenger.css";
import { toast } from "react-hot-toast";
import axios from "axios";

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
  const [value, setValue] = useState("");
  const { clidkedUserDetails } = useSelector((state) => state.clickedUser);
  const [showMenu, setShowMenu] = useState(false);
  const [image, setImage] = useState(null);
  const [videoFile, setVideoFile] = useState(null);
  const imageRef = useRef();
  const videoRef = useRef();

  useEffect(() => {
    socket.current = io("ws://localhost:8080");
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data?.senderId,
        text: data?.text,
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
    socket.current.on("getUsers", (users) => {});
  }, [userDetails]);

  //geting existing conversations
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

  //geting messages
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

  const handleSubmit = async () => {
    // e.preventDefault();
    const message = {
      conversationId: currentChat._id,
      sender: userDetails._id,
      text: newMessage,
      type: "text",
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

    //sending messages to database
    const res = await postMessages(message);
    setMessages([...messages, res]);
    setNewMessage("");
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleDataFromChild = (data) => {
    setDataFromChild(data);
  };

  //sending media through messages
  const UploadFile = async () => {
    if (videoFile === null && image === null) {
      return;
    }
    const type = !image ? "video" : "image";
    const file = !image ? videoFile : image;
    if (file.size > 70000000) {
      toast.error("seems lik ebidg a filen take some time");
    }
    const data = new FormData();
    data.append("file", file);
    data.append(
      "upload_preset",
      import.meta.env.VITE_APP_CLOUDINARY_UPLOAD_PRESET
    );
    data.append("cloud_name", import.meta.env.VITE_CLOUDINARY_UPLOAD_NAME);
    try {
      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${
          import.meta.env.VITE_CLOUDINARY_UPLOAD_NAME
        }/image/upload`,
        data
      );
      const message = {
        senderId: userDetails._id,
        text: res.data.secure_url,
        conversationId: currentChat._id,
        type: type,
      };
      const url = res.data.secure_url;

      //sending file to socket server
      const recieverId = currentChat?.members?.find(
        (member) => member !== userDetails._id
      );
      socket.current.emit("sendMessage", {
        message,
      });

      //sending to the database
      postMessages(message, tokenData).then((response) => {
        console.log("response ", response);
        setMessages([...messages]);
        setVideoFile(null);
        setImage(null);
      });
    } catch (error) {
      console.log("error wile uploading to cloudinary ", error);
    }
  };

  return (
    <>
      <Header />
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <SearchBar onData={handleDataFromChild} />
            <div
              className="card-scroll"
              style={{ height: "407px", overflowY: "scroll" }}
            >
              {conversations?.map((c) => (
                <div onClick={() => setCurrentChat(c)}>
                  <Conversation messages={messages} conversation={c} />
                </div>
              ))}
            </div>
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
                  <div
                    onClick={() => {
                      setShowMenu(!showMenu);
                    }}
                    style={{ width: "29px", height: "29px", cursor: "pointer" }}
                  >
                    <MdOutlineAttachFile />
                  </div>
                  {showMenu && (
                    <div
                      style={{
                        display: "block",
                        textAlign: "center",
                        height: "max-content",
                        position: "absolute",
                        marginTop: "-7em",
                        marginLeft: "-0.7em",
                      }}
                    >
                      <div
                        onClick={() => imageRef.current.click()}
                        style={{
                          padding: "5px",
                          borderRadius: "50%",
                          marginBottom: "0.7em",
                        }}
                      >
                        <BiImageAdd
                          style={{ fontSize: "2em", color: "#21F052" }}
                        />
                        <input
                          disabled={videoFile}
                          onChange={(e) => {
                            setImage(e.target.files[0]);
                          }}
                          type="file"
                          id="file"
                          ref={imageRef}
                          style={{ display: "none" }}
                          accept="image/x-png,image/gif,image/jpeg"
                        />
                      </div>
                      <div
                        onClick={() => videoRef.current.click()}
                        style={{
                          padding: "5px",
                          borderRadius: "50%",
                          marginBottom: "0.7em",
                        }}
                      >
                        <BiVideoPlus
                          style={{ fontSize: "2em", color: "#EC4768" }}
                        />
                        <input
                          disabled={image}
                          onChange={(e) => {
                            setVideoFile(e.target.files[0]);
                          }}
                          type="file"
                          id="file"
                          ref={videoRef}
                          style={{ display: "none" }}
                          accept="video/mp4,video/x-m4v,video/*"
                        />
                      </div>
                    </div>
                  )}

                  <InputEmoji
                    className="chatMessageInput"
                    onChange={(value) => setNewMessage(value)}
                    value={newMessage}
                    placeholder="write Something...."
                  />
                  <GrSend
                    style={{ marginLeft: "1em" }}
                    onClick={() =>
                      newMessage !== "" ? handleSubmit() : UploadFile()
                    }
                    className="sendIcon"
                  />
                  <input
                    type="file"
                    name=""
                    id=""
                    style={{ display: "none" }}
                    ref={imageRef}
                  />

                  {/* <button onClick={handleSubmit} className="chatSubmitButton">
                    Send
                  </button> */}
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
      +
    </>
  );
}

export default Messenger;
