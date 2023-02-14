import React, { useEffect, useState } from 'react';
import './ChatBox.css';
import axios from '../../../../config/axiosInstance';
import { useSelector } from 'react-redux';

function ChatBox({chat}) {
    const  [ userData , setUserData ] = useState(null)
const [ messages , setMessages] = useState([])
const { userDetails } = useSelector((state) => state.user);


const currentUser = userDetails._id
    useEffect(()=>{
      const userId = chat?.members?.find((id) => id !== currentUser);
      const getUserData = async () => {
        try {
          const { data } = await axios.get("/chat/get-user-data/" + userId);
          setUserData(data);
        } catch (error) {
          console.error("error ", error);
        }
      };
      if(chat !==null) getUserData()
      
    },[chat, currentUser])


    useEffect(()=>{
      const fetchMessages = async()=>{
        try {
          const  {data } = await axios.get('/message/'+chat._id)
          setMessages(data)
        } catch (error) {
          console.error(error)
        }
      }
      if(chat !== null) fetchMessages()
    },[chat])

    const defaultProfile = "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp";
 
  return (
   <>
   <div className="ChatBox-container">
    <>
    <div className="chat-header">
      <div className="follower">
      <div>
          <img
            src={userData?.imageUrl ? userData?.imageUrl : defaultProfile}
            alt=""
            className="followerImage"
            style={{ width: "50px", height: "50px" }}
          />
          <div className="name" style={{ fontSize: "0.8rem" }}>
            <span>
              {userData?.firstName} {userData?.lastName}
            </span>
          </div>
        </div>
        </div>
        <hr style={{ width: "85%", border: "0.1px solid #ddd" }} />

        </div>
        <div className="chat-body">

        </div>
    </>
   </div>
   </>
  )
}

export default ChatBox