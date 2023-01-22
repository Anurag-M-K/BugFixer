import React from 'react'
import Header from '../../components/UserComponents/Header/Header'
import Home from '../../components/UserComponents/Home/Home';
import PublicPlatform from '../../components/UserComponents/Home/PublicPlatform';

function SuperHome() {
  return (
    <div>
        <Header/>
        <Home/>
        <PublicPlatform/>
    </div>
  )
}

export default SuperHome