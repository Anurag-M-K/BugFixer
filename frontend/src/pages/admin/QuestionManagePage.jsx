import React from 'react'
import styled from 'styled-components';
import Sidebar from '../../components/AdminComponents/AdminDashboard/Sidebar';
import AdminQuestion from '../../components/AdminComponents/AdminQuestion/QuestionManage';

function QuestionManagePage() {
  return (
    <Div style={{backgroundColor:'black' }}>
      <Sidebar/>
        <AdminQuestion/>
    </Div>
  )
}

const Div = styled.div`
position:relative `
export default QuestionManagePage