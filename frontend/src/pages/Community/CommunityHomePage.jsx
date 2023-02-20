import React from 'react'
import Community from '../../components/Community/CommunityPages/Community'
import Footer from '../../components/UserComponents/Footer'
import Header from '../../components/UserComponents/Header/Header'

function CommunityHomePage() {
  return (
    <div>
        <Header/>
        <Community/>
        <Footer/>
    </div>
  )
}

export default CommunityHomePage