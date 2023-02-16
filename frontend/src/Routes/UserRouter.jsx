import React from "react";

import AddQuestionPage from '../pages/user/AddQuestionPage'
import ViewQuestion from "../components/UserComponents/ViewQuestion";
import Signup from "../pages/user/UserSignupPage";
import Login from "../pages/user/UserLogin";
import Private from "../PrivateRoutes/UserRoute";
import SuperHome from "../pages/user/SuperHomePage";
import UserProfilePage from "../pages/user/UserProfilePage";
import Test from '../pages/user/Test'
import UserEditProfilePage from "../pages/user/UserEditProfilePage";
import Otp from "../components/UserComponents/Signup/Otp";
import CommunityHomePage from "../pages/Community/CommunityHomePage";
import Chat from "../components/Community/Chat/Chat";
import { Route ,Routes,BrowserRouter as Router } from 'react-router-dom';
import { useSelector } from "react-redux";


function UserRoute(){
    const { loading } = useSelector((state) => state.alerts);

  return (
    <>
        {loading && <Spinner />}
    <Routes>
          <Route exact path="/home" element={ <Private> <Test /> </Private> }/>
          <Route exact path="/login-page" element={<Private> <Login /> </Private> } />
          <Route exact path="/signup-page" element={<Signup />}   />
          <Route exact path="/add-question" element={<Private><AddQuestionPage /></Private>} />
          <Route exact path="/question" element={<Private><ViewQuestion /></Private>} />
          <Route exact path="/" element={<SuperHome/>}/>
          <Route exact path="/home" element={<Test/>} />
          <Route exact path="/profile" element={<Private><UserProfilePage/></Private>} />
          <Route exact path="/edit-profile" element={<Private><UserEditProfilePage/></Private>} />
          <Route exact path='/otp-page' element={<Otp/>} />
          <Route exact path="/community" element={<CommunityHomePage/>}/>
          <Route exact path="/chat" element={<Chat/>}/>
          </Routes>
  </>
  )

}

export default UserRoute;