import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../helper/UsersChatHelper";
import { setFriendData } from "../../../redux/features/friendDataSlice";
import "./Conversation.css";

export default function Conversation({ conversation,messages }) {
  const { userDetails } = useSelector((state) => state.user);
  const { tokenData } = useSelector((state) => state.user);
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  const { clidkedUserDetails } = useSelector((state) => state.clickedUser);

    useEffect(() => {
    const friendId = conversation?.members?.find(
      (memberId) => memberId !== userDetails._id
    );

    try {
      (async () => {
        const res = await getUser(friendId, tokenData);
        dispatch(setFriendData(res)); 
        setUser(res);
      })();
    } catch (error) {
      console.log(error);
    }
  }, [userDetails, conversation]);

  

  // var sample = [user,[messages]]


  return (
    <>
    

    {/* {sample?.messages?.length > 0 ?  */}
      <div className="conversation d-flex flex-column">
        <div className="mt-3">
          
          <img
            src={
              user?.imageUrl
                ? user.imageUrl
                : "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
            }
            className="conversationImg"
            alt=""
          />
          <span className="conversationName">{user?.firstName}</span>
        </div>
      </div>
      {/* :" " } */}
    
    </>
  );
}
