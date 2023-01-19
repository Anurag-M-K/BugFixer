import React from 'react'
import Dashboard from '../../components/AdminComponents/AdminDashboard/Dashboard'
import Sidebar from '../../components/AdminComponents/AdminDashboard/Sidebar'
// import Navbar from '../../components/AdminComponents/AdminDashboard/Navbar'

function AdminDashboard() {
  return (
    <div  style={{backgroundColor:'black'}}>
        <Sidebar/>
        <Dashboard />
    </div>
  )
}

export default AdminDashboard