import React, { useEffect, useState } from "react";
import "./Searchbar.css";
import { BiSearchAlt2 } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { setAllUsersDetails } from "../../../redux/features/userSlice";
import { createConversation, getAllUsers, getConversation } from "../../../helper/UsersChatHelper";
import { setClickedUserDetails } from "../../../redux/features/chatLeftSideClickedUserSlice";
import { toast } from "react-hot-toast";
import { setConversationDetails } from "../../../redux/features/conversationSlice";

function SearchBar() {
  const { tokenData, allUsersDetails } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [filterData, setFilterData] = useState([]);
  const { userDetails } = useSelector((state)=>state.user)
  const [displayUsers, setDisplayUsers] = useState(true);
  const [displayBox, setDisplayBox] = useState(true);


  //geting all users and updaing redux
  useEffect(() => {
    try {
      
      (async () => {
        const users = await getAllUsers(tokenData);
        dispatch(setAllUsersDetails(users));
      })();
    } catch (error) {
      console.log(error)
      toast.error("server connection failed")
    }
  }, []);

  const allusers = allUsersDetails?.filter((users)=> users._id !== userDetails._id)

  //filter username  logic
  const handleFilter = (event) => {
    setDisplayBox(true);
    const searchWord = event.target.value;
    const newFIlter = allusers.filter((value) => {
      return value.firstName.toLowerCase().includes(searchWord.toLowerCase());
    });
    event.target.value = ""
    setFilterData(newFIlter);
  };

  //get clicked user  details and create conversation 
  const onClickUser = async(userId) => {
    const filteredUserData = allusers.filter(
      (value) => value._id == userId
    );
    dispatch(setClickedUserDetails(filteredUserData));
    setDisplayUsers(false);
    setDisplayBox(false);
    await createConversation(userDetails._id,filteredUserData[0]._id)
    const allConversation = await getConversation(userDetails._id,tokenData)
    dispatch(setConversationDetails(allConversation))
    }

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder="Search for users"
          onChange={handleFilter}
        />
        <div className="searchIcon">
          <BiSearchAlt2 />
        </div>
      </div>
      <div className="dataBox">
        {displayBox && (
          <div className="dataBox">
            {filterData.length != 0 && (
              <div className="dataResult">
                {filterData.slice(0, 15).map((value, key) => {
                  return (
                    <a key={key._id}
                      className="dataItem"
                      onClick={() => onClickUser(value._id)}
                    >
                      <p>{value?.firstName}</p>
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
