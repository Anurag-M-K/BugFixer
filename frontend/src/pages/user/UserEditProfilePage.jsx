import React from 'react'
import Footer from '../../components/UserComponents/Footer'
import Header from '../../components/UserComponents/Header/Header'
import ProfileEdit from '../../components/UserComponents/UserProfile/ProfileEdit'
function UserEditProfile() {
  return (
    <div>
      <Header/>
        <ProfileEdit/>
        <Footer/>
    </div>
  )
}

export default UserEditProfile