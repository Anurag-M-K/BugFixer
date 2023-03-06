import React from "react";
import { useSelector } from "react-redux";
import { format } from 'timeago.js'
import "./Message.css";

export default function Message({message,own}) {
  const { friendData } = useSelector((state)=>state.friend) 
 var newMessage = [];
 newMessage.push(message);
  const { userDetails } = useSelector((state)=>state.user)

console.log("newMessage ",newMessage)
console.log("newMessage ",newMessage[0].type)
  
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src={own && userDetails?.imageUrl ? userDetails.imageUrl : friendData?.imageUrl}
          alt=""
        />
                      {newMessage.map((message, id) =>{
                        return (
                          <>
                          
                  {message?.type ==="text" && <span>{message.text ? message.text : ""}</span>}
                  {message?.type ==="image" && <img style={{width:"175px",height:"175px"}} src={message.text}></img>}
                  {message?.type ==="video" && <video src={message.text} controls></video>}
                          </>
                  
                  )
                } )}

        {/* <p className="messageText">
{message?.text}
        </p> */}
      </div>
      <div className="messageBottom">{format(message?.createdAt)}</div>
    </div>
  );
}
