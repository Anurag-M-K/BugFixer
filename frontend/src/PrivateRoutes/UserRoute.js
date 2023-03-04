import React, { useEffect } from 'react'
import {  useNavigate ,useLocation} from 'react-router-dom'

export default function PrivateRoute({children}) {
  const location = useLocation()
  const navigate = useNavigate()
  useEffect(()=>{
    if(localStorage.getItem('userToken')){
     if(location.pathname === '/user/profile'){
       return navigate("/user/profile")
     }else if (location.pathname === '/user/home'){

       return navigate("/user/home") 
     }
  
    }else{
    return navigate('/user/login-page')
    }
    
  },[])
  return children

 
}
