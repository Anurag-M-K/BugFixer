import React, { useEffect } from "react";
import "./css/Header.css";
import axios from '../../../config/axiosInstance'
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";
import {  useSelector } from "react-redux";
import { useState } from "react";
import toast,{Toaster} from 'react-hot-toast';
import { GrLogout } from "react-icons/gr";
import ReputationBadge from "./ReputationBadge";

function Header() {
  const {userDetails} = useSelector(state=> state.user)
  const [username, setUsername] = useState('');
  const {tokenData} = useSelector(state=> state.user)
  const navigate = useNavigate()
  const hndleLogout = ()=>{
    toast.success("Logout successfully")
    localStorage.clear()
    navigate('/user/login-page')
    message.success("logout successfully")    
  }
  const showProfile =async ()=>{
    try {
      const id = userDetails._id
      await axios({
        url:'/api/getUserProfile',
        method:"GET",
        headers:{
          Authorization:tokenData,
        }
      }).then(()=>{
      navigate('/user/profile')
    })
    } catch (error) {
      toast.error('Network Error..!');
      console.log(error)
      
    }
  }

  return (
    <nav className="app navbar navbar-expand-lg navbar-light bg-light px-5">
          <><span onClick={() => navigate('/user/home')} className="navbar-brand">
      <img style={{cursor:"pointer"}} src='https://res.cloudinary.com/dmvxmurxw/image/upload/v1674187605/logo4_g8zbar.png' alt="" width="160px" />
    </span><button

      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
        <span className="navbar-toggler-icon"></span>
      </button><div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">

          <li className="nav-item mx-4 active">
            <Link to={'/user/community'} className="nav-link">
              <span>Community</span>  <span className="sr-only">(current)</span>
            </Link>

          </li>
          <li className="nav-item mx-4 active">
            <Link to={'/user/messenger'} className="nav-link">
              <span>chat</span>  <span className="sr-only">(current)</span>
            </Link>

          </li>
          <li className="nav-item mx-4 active">
            <Link to={'/user/home'} className="nav-link">
              <span>Questions</span>  <span className="sr-only">(current)</span>
            </Link>

          </li>
         
         

          <li className="nav-item">
           
          </li>
        </ul>
        
        <div>

       <ul className="navbar-nav ">

     
          {userDetails?.firstName ? (
       
            <>
            <li className="nav-item active"><img className="img-header me-2 " onClick={showProfile}  style={{width:"36px",height:"36px", cursor:"pointer", borderRadius: "22px"}}
             src={userDetails.imageUrl ? userDetails?.imageUrl : "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"} alt="" /></li>


             <li className="nav-item active"> <span onClick={showProfile} className=" me-3 headerBtn"> {userDetails?.firstName}</span></li>
             
   <li className="nav-item active"><ReputationBadge className="badge"/></li>
     <li className="nav-item active"><div   onClick={hndleLogout} style={{cursor:"pointer",borderRadius : "15px",width:"45px",paddingLeft:"8px"}}>
<GrLogout />
</div></li>
           

            </>
          ) : (
            <>
              {/* < to="/user/login-()=>navigpage" className="nav-link"> */}
                <button onClick={()=>navigate("/user/login-page")}
                  className="btn btn-outline-primary my-sm-0 btn-sm px-3"
                  type="submit"
                  style={{ backgroundColor: "#e3f2fd", color: "gray" }}
                >
                  Log in
                </button>
              {/* </> */}
              {/* <Link to="/user/signup-page" className="nav-link"> */}
                <button onClick={()=>navigate("/user/signup-page")}
                  className="btn btn-primary my-sm-0 btn-sm px-3 ms-2"
                  type="submit"
                >
                  Sign Up
                </button>
              {/* </Link> */}
            </>
          )}
            </ul>
        </div>
        <Toaster />
      </div></>
        </nav>
  );
}

export default Header;
