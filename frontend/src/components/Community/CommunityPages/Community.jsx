import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { joinCommunity } from "../../../helper/userCommunityHelper";
import "./Css/Community.css";
import toast,{Toaster} from 'react-hot-toast'
 import { setUserDetails } from "../../../redux/features/userSlice";


const Community = () => {
  const navigate = useNavigate()
  const [selectedTab, setSelectedTab] = useState("all");
  const { posts } = useSelector((state)=>state.communityPosts)
  const { userDetails,tokenData } = useSelector((state)=>state.user)
  const dispatch = useDispatch()


  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };
useEffect(()=>{
  (async ()=>{
    const posts = await getAllCommunityPosts();

    dispatch(setCommunityPosts(posts));
  })
},[posts])


  const handleJoinCommunity = async (post)=>{
  
    try {
      swal({
        title:"Are you sure",
        text:  `Are you sure you want to join ${post.title} community?`,
        icon:'success',
        buttons:true,
        dangerMode:true,
      }).then((button)=>{

        if(button){

          joinCommunity(userDetails,post,tokenData).then((response)=>{
            
            
            swal(`you successfully joined the community`,{
              icon:"success",
            })
            navigate(`/single-community/${post._id}`)

            })
        }else{
          swal('Canceled')
        }
      })
      } 
      catch (error) {
        console.log(error)
      }
      
    }
    
    
    
    
  return (
    <div className="container mt-3">
      <div className="tabs">
        <button
          className={`tab-button ${selectedTab === "all" ? "active" : ""}`}
          onClick={() => handleTabClick("all")}
        >
          All
        </button>
        <button
          className={`tab-button ${selectedTab === "popular" ? "active" : ""}`}
          onClick={() => handleTabClick("popular")}
        >
          Popular
        </button>
        <button
          className={`tab-button ${selectedTab === "new" ? "active" : ""}`}
          onClick={() => handleTabClick("new")}
        >
          New
        </button>
      </div>
      <div  className="posts">
        {posts?.map((post) => (
          <div onClick={()=>handleJoinCommunity(post)}>

<div  key={post._id} className="post">
           <h3 className="post-title mt-5">{post.title}</h3>
            <p className="post-votes"> {post.body}</p>
          </div>
        </div>
        ))}
      </div>
      <Toaster/>
    </div>
  );
};

export default Community;
