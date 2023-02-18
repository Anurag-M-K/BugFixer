import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUser } from "../../../helper/UsersChatHelper";
import "./Conversation.css";

export default function Conversation({ conversation }) {
  const { userDetails } = useSelector((state) => state.user);
  const { tokenData } = useSelector((state) => state.user);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const friendId = conversation?.members?.find(
      (memberId) => memberId !== userDetails._id
    );

    try {
      (async () => {
        const res = await getUser(friendId, tokenData);
        setUser(res);
      })();
    } catch (error) {
      console.log(error);
    }
  }, [userDetails, conversation]);
  return (
    <div className="conversation">
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
  );
}
