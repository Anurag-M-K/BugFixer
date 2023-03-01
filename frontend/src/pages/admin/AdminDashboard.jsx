
import React from 'react'
import styled from 'styled-components';
import Dashboard from '../../components/AdminComponents/AdminDashboard/Dashboard'
import Sidebar from '../../components/AdminComponents/AdminDashboard/Sidebar';
import './Admin.css'
export default function AdminDashboard() {
  return (
    <Div  style={{backgroundColor:'black',height:"100%"}} >
             <Sidebar/>
             <Dashboard />
        </Div>
  )
}

const Div = styled.div`
position:relative


`