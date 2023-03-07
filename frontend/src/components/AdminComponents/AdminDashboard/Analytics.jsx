import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import { BiGroup } from "react-icons/bi";
import { FiActivity } from "react-icons/fi";
import { cardStyles } from "./ReusableStyles";
import { setCompleteUsersDetails } from "../../../redux/features/completeUserDetailsSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setQuestionDetails } from "../../../redux/features/questionSlice";
import { GiTwirlCenter } from "react-icons/gi";
import { setCommunityPosts } from "../../../redux/features/communityPostsSlice";
import { getAllCommunityPosts } from "../../../helper/adminCommunityHelper";
import { getTags } from "../../../helper/adminTagHelper";
import { setTags } from "../../../redux/features/tagSlice";
import { getAllTags } from "../../../helper/homePageRightSideHelper";



export default function Analytics() {
  const { completeUsers } = useSelector((state) => state.users);
  const [questions,setQuestions] = useState([]);
  const { posts } = useSelector((state) => state.communityPosts);
  const { allTags } = useSelector((state)=>state.tag)
  const { adminToken } = useSelector((state) => state.admin)
  const dispatch = useDispatch()
  useEffect(() => {
    axios.defaults.baseURL = "http://localhost:8060";
    const data = axios
      .get("/admin/user-details")
      .then((response) => {
        dispatch(setCompleteUsersDetails(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [])

  useEffect(()=>{
    async function findQuestions(){
      const res = await axios.get("/api/getQuestion")
      setQuestions(res.data.reverse())

        dispatch(setQuestionDetails(res.data))
        return res.data
    
    } 
    findQuestions()
  },[])


  useEffect(() => {
    try {
      (async () => {
        const posts = await getAllCommunityPosts();
        dispatch(setCommunityPosts(posts));
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(()=>{
    (async()=>{
      const tags = await getAllTags(adminToken)
      dispatch(setTags(tags))
    })()
  },[])

  return (

    <Section>
      <div className="analytic ">
        <div className="content">
          <h5>Users</h5>
          <h2>{completeUsers?.length   }</h2>
        </div>
        <div className="logo">
          {/* <BsFillCalendar2WeekFill /> */}
          <BiGroup />
        </div>
      </div>
      <div className="analytic">
        <div className="logo">
          <IoStatsChart />
        </div>
        <div className="content">
          <h5>Question</h5>
          <h2>{questions?.length}</h2>
        </div>
      </div>
      <div className="analytic">
        <div className="logo">
          <GiTwirlCenter />
        </div>
        <div className="content">
          <h5>Community</h5>
          <h2>{posts?.length}</h2>
        </div>
      </div>
      <div className="analytic ">
        <div className="content">
          <h5>Tags</h5>
          {/* <h2>{allTags[0].tags?.length}</h2> */}
        </div>
        <div className="logo">
          <FiActivity />
        </div>
      </div>
    </Section>
  );
}
const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  .analytic {
    ${cardStyles};
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
    transition: 0.5s ease-in-out;
    &:hover {
      background-color: #ffc107;
      color: black;
      svg {
        color: white;
      }
    }
    .logo {
      background-color: black;
      border-radius: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1.5rem;
      svg {
        font-size: 1.5rem;
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    .analytic {
      &:nth-of-type(3),
      &:nth-of-type(4) {
        flex-direction: row-reverse;
      }
    }
  }
`;
