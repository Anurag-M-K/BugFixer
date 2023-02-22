import React from 'react'
import styled from 'styled-components';
import Sidebar from '../../components/AdminComponents/AdminDashboard/Sidebar'
import Tags from '../../components/AdminComponents/Tags/Tags'

function TagsAddPage() {
  return (
    <Div style={{backgroundColor:'black',height:"100%" }}>
    <Sidebar/>
      <Tags/>
  </Div>
  )
}
const Div = styled.div`
position:relative `

export default TagsAddPage