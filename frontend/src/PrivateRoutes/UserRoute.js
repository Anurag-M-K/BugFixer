import React, { useEffect } from 'react'
import {  useNavigate } from 'react-router-dom'

export default function PrivateRoute({children}) {
  const navigate = useNavigate()
  useEffect(()=>{
    if(localStorage.getItem('userToken')){
     
      return navigate("/home") 

  
    }else{
    return navigate('/login-page')
    }
    
  },[])
  return children

 
}
