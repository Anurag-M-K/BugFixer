import React, { useEffect, useState } from "react";
import "./Chat.css";
import LogoSearch from "./LogoSearch/LogoSearch";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../../config/axiosInstance";
import Conversation from "./Conversation/Conversation";
import { setChatDetails } from "../../../redux/features/chatSlice";
import { Link } from "react-router-dom";
import { UilSetting } from "@iconscout/react-unicons";
import Noti from "./img/noti.png";
import Home from "./img/home.png";
import Comment from './img/comment.png'
import ChatBox from "./ChatBox/ChatBox";

function Chat() {
  const dispatch = useDispatch();
  const { userDetails } = useSelector((state) => state.user);
  const [chats, setChats] = useState([]);
  const id = userDetails._id;
  const { tokenData } = useSelector((state) => state.user);
  const [currentChat , setCurrentChat] = useState(null)


  useEffect(() => {
    const getChat = async () => {
      const data = await axios({
        url: "/chat/" + id,
        method: "GET",
        headers: {
          Authorization: tokenData,
        },
      });
      setChats(data.data);
    };
    getChat();
  }, []);

  dispatch(setChatDetails(chats));

  return (
    <div className="Chat">
      <div className="Left-side-chat">
        <LogoSearch />
        <div className="Chat-container">
          <h2>Chat</h2>
          <div className="Chat-list">
            {/* {chats.map((chat)=>{ */}
            <div onClick={()=>setCurrentChat(chats) }>
              <Conversation />
            </div>
            {/* // })}  */}
          </div>
        </div>
      </div>
      <div className="Right-side-chat">
        <div style={{width:"20rem", alignSelf:"flex-end"}}>
          <div className="navIcons">
            <Link to="../home">
              <img src={Home} alt="" />
            </Link>
            <UilSetting />
            <img src={Noti} alt="" />
            <Link to="..chat">
              <img src={Comment} alt="" />
            </Link>
          </div>
          <ChatBox  chat={currentChat} />
        </div>
      </div>
    </div>
  );
}

export default Chat;
