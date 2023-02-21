import React from 'react'
import Sidebar from '../../components/AdminComponents/AdminDashboard/Sidebar'
import ReportedQuestion from '../../components/AdminComponents/AdminQuestion/ReportedAdminQuestion'
import styled from 'styled-components';

function AdminQuestionPage() {
  return (
    <Div style={{backgroundColor:'black' }}>
      <Sidebar/>
        <ReportedQuestion/>
    </Div>
  )
}

const Div = styled.div`
position:relative `

export default AdminQuestionPage