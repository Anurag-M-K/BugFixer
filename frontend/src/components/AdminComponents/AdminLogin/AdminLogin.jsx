import React, { useEffect } from "react";
import "./AdminLogin.css";
import axios from "axios";
import { useState } from "react";

function AdminLogin() {
  const [data, setData] = useState({username:"",password:""});
  const [isAdminLoggedIn , setIsAdminLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const handleChange = ({currentTarget:input})=>{
setData({...data,[input.name]:input.value});
  };


  const handleSubmit = async(e)=>{
e.preventDefault();
    try {
      const url ="http://localhost:8080/admin/admin-login";
    
      const {data:res} = await axios.post(url,data);  
      console.log(data);
      localStorage.setItem('token',res.data);
      setIsAdminLoggedIn(true)
      window.location='/admin-dashboard'
    } catch (error) {
      if(error.response &&
        error.response.status >= 400 &&
        error.response.status <=500){
          console.log(error.response.data.message)
          setError(error.response.data.message);
        }
    }

  }



  return (
   <div className="bodyAdmin">
      <div className="container">
        <div className="login-box">
          <h2 >𝐋𝐨𝐠𝐢𝐧</h2>
          <form onSubmit={handleSubmit}>
            <div className="user-box">
              <input 
              type="text" 
              name="username"
              onChange={handleChange}
              value={data.username}
               required="" />
              <label>Username</label>
            </div>
            <div className="user-box">
              <input 
              type="password" 
              name="password"
              onChange={handleChange}
              value={data.password}
               required="" 
               />
              <label>Password</label>
            </div>
            {error && <div > <p className="error-show">{error}</p></div>}
            <a href=""><button style={{backgroundColor:"#243b55"}}>
            Submit
            </button>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              
            </a>
          </form>
        </div>
     
    </div>
    </div>
  );
}

export default AdminLogin;
