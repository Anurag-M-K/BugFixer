import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "../../../../config/axiosInstance";
import { setChatDetails } from "../../../../redux/features/chatSlice";


const Conversation = () => {
  const [userData, setUserData] = useState("");
  const { chatDetails } = useSelector((state) => state.chat);
  const { userDetails } = useSelector((state) => state.user);
  const { tokenData } = useSelector((state) => state.user);

  const [chats, setChats] = useState([]);

  const id = userDetails._id;
  useEffect(() => {
    console.log("id in useefect ", id);
    const getChat = async () => {
      const data = await axios({
        url: "/chat/" + id,
        method: "GET",
        headers: {
          Authorization: tokenData,
        },
      });
      setChats(data.data);
      dispatch(setChatDetails(chats));

    };
    getChat();
    // console.log("data check after function call ", getChat());
  }, []);

  useEffect(() => {
    const uid = userDetails._id;
    console.log("in useefect", chatDetails);
    console.log("uid ", uid);
    const userId = chatDetails[0]?.members?.filter((id) => id !== uid);
    if (!userId) {
      console.error("Error: userId is undefined");
      return;
    }
    console.log("useid checking form conversation ", userId);
    const getUserData = async () => {
      try {
        const { data } = await axios.get("/chat/get-user-data/" + userId);
        setUserData(data);
      } catch (error) {
        console.error("error ", error);
      }
    };
    getUserData();
  }, []);

  const defaultProfile =
    "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp";
  return (
    <>
      <div className="conversation">
        <div>
          <div className="online-dot"></div>
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
            <span>Online</span>
          </div>
        </div>
      </div>
      <hr style={{ width: "85%", border: "0.1px solid #ddd" }} />
    </>
  );
};

export default Conversation;
