import React from 'react'
import Sidebar from '../../components/AdminComponents/AdminDashboard/Sidebar'
import AdminQuestion from '../../components/AdminComponents/AdminQuestion/AdminQuestion'
import styled from 'styled-components';

function AdminQuestionPage() {
  return (
    <Div style={{backgroundColor:'black'}}>
      <Sidebar/>
        <AdminQuestion/>
    </Div   >
  )
}

const Div = styled.div`
position:relative `

export default AdminQuestionPage