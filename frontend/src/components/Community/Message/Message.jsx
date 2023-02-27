import React from "react";
import { useSelector } from "react-redux";
import { format } from 'timeago.js'
import "./Message.css";

export default function Message({message,own}) {
  const { friendData } = useSelector((state)=>state.friend) 
 
  const { userDetails } = useSelector((state)=>state.user)


  
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src={own && userDetails?.imageUrl ? userDetails.imageUrl : friendData?.imageUrl}
          alt=""
        />
        <p className="messageText">
{message?.text}
        </p>
      </div>
      <div className="messageBottom">{format(message?.createdAt)}</div>
    </div>
  );
}
