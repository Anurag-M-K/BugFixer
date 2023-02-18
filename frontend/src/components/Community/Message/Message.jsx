import React from "react";
import { format } from 'timeago.js'
import "./Message.css";

export default function Message({message,own}) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
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
