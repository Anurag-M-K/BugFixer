import React from 'react'
import Sidebar from '../../components/AdminComponents/AdminDashboard/Sidebar'
import UserManage from '../../components/AdminComponents/UserManage/UserManage'
import styled from 'styled-components';

function UserManagePage() {
  return (
 <Div style={{backgroundColor:'black'}}>

            <Sidebar/>
        <UserManage/>
 </Div>
   
  )
}
const Div = styled.div`
position:relative `

export default UserManagePage