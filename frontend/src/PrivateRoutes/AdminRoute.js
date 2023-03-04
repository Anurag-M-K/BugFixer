import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AdminPrivateRoute({children}) {
    const navigate = useNavigate();
useEffect(()=>{
    if(localStorage.getItem('AdminToken')){
        return navigate('/admin/admin-dashboard')
    }else{
        return navigate('/admin/admin-login')
    }
},[])
 return children
}
