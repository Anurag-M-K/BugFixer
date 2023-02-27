import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../helper/UsersChatHelper";
import { setFriendData } from "../../../redux/features/friendDataSlice";
import "./Conversation.css";

export default function Conversation({ conversation  }) {
  const { userDetails } = useSelector((state) => state.user);
  const { tokenData } = useSelector((state) => state.user);
  const [user, setUser] = useState(null);
  const dispatch = useDispatch()
  const { clidkedUserDetails } = useSelector((state)=>state.clickedUser)


  console.log("clidkced user ",clidkedUserDetails)
  useEffect(() => {
    const friendId = conversation?.members?.find(
      (memberId) => memberId !== userDetails._id
    );

    console.log("friend id ",friendId)
    try {
      (async () => {
        const res = await getUser(friendId, tokenData);
        dispatch(setFriendData(res))
        setUser(res);
      })();
    } catch (error) {
      console.log(error);
    }
  }, [userDetails, conversation]);
  
  
  return (
    <>
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
    <div className="conversation d-flex flex-column">

    <div className="pt-3">

    <img
      src={
        clidkedUserDetails[0]?.imageUrl
        ? clidkedUserDetails[0]?.imageUrl
        : "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
      }
      className="conversationImg"
      alt=""
      />
    <span className="conversationName">{clidkedUserDetails[0]?.firstName}</span>
      </div>
        </div>
    </>
  );
}
