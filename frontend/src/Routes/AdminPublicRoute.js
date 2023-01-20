import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AdminPublicRoute({children}) {
    const navigate = useNavigate();
useEffect(()=>{
    if(localStorage.getItem('AdminToken')){
        return navigate('/admin-dashboard')
    }else{
        return navigate('/admin-login')
    }
},[])
 return children
}
