import React from 'react'
import Footer from '../../components/UserComponents/Footer/Footer';
import Header from '../../components/UserComponents/Header/Header'
import Home from '../../components/UserComponents/Home/Home';
import PublicPlatform from '../../components/UserComponents/Home/PublicPlatform';

function SuperHome() {
  return (
    <div>
        <Header/>
        <Home/>
        <PublicPlatform/>
        <Footer/>
    </div>
  )
}

export default SuperHome