import React from 'react'
import Sidebar from '../../components/AdminComponents/AdminDashboard/Sidebar'
import styled from 'styled-components';
import CommunityManage from '../../components/AdminComponents/Community/CommunityManage';

function AdminCommunityPage() {
  return (
    <Div style={{backgroundColor:'black',height:"100vh"}}>
      <Sidebar/>
        <CommunityManage/>
    </Div>
  )
}

const Div = styled.div`
position:relative `

export default AdminCommunityPage