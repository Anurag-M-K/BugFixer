import React from 'react';
import Footer from '../../components/UserComponents/Footer/Footer';
import Header from '../../components/UserComponents/Header/Header';
import UserProfile from '../../components/UserComponents/UserProfile/UserProfile';

function UserProfilePage() {
  return (
    <div>
        <Header/>
        <UserProfile />
        <Footer/>
    </div>
  )
}

export default UserProfilePage