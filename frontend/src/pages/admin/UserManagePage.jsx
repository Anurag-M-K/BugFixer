import React from 'react'
import Navbar from '../../components/AdminComponents/AdminDashboard/Navbar'
import Sidebar from '../../components/AdminComponents/AdminDashboard/Sidebar'
import UserManage from '../../components/AdminComponents/UserManage/UserManage'

function UserManagePage() {
  return (
    <div className='col-lg-12  ' >
        
        <UserManage/>
    </div>
  )
}

export default UserManagePage