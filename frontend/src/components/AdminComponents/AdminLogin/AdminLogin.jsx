import React, { useEffect } from 'react'
import './AdminLogin.css'
import axios from 'axios'
import { useState } from 'react'

function AdminLogin() {
 
  const [data , setData] = useState('');
  const getData = async()=>{
    const response = await axios.get('http://localhost:5000/getData');
    setData(response.data)
  }
  useEffect(()=>{
    getData()
  },[]);
  
  return (
    <div>
      <div>{data}</div>
 <div className="login-box">
  <h2>𝐋𝐨𝐠𝐢𝐧</h2>
  <form>
    <div className="user-box">
      <input type="text" name="" required=""/>
      <label>Username</label>
    </div>
    <div className="user-box">
      <input type="password" name="" required=""/>
      <label>Password</label>
    </div>
    <a href="https://codepen.io/Marvelle/full/YzQqmGr">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </a>
  </form>
</div>
    </div>
  )
}

export default AdminLogin