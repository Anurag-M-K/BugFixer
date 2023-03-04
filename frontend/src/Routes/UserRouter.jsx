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
import { Route ,Routes } from 'react-router-dom';
import ViewQuestionPage from "../pages/user/ViewQuestionPage";
import Messenger from "../components/Community/Messenger/Messenger";
import SingleCommunityPage from "../pages/Community/SingleCommunityPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

function UserRoute(){

  return (
    <>
    <Routes>
          <Route exact path="/home" element={ <Private> <Test /> </Private> }/>
          <Route exact path="/login-page" element={<Private> <Login /> </Private> } />
          <Route exact path="/signup-page" element={<Signup />}   />
          <Route exact path="/add-question" element={<Private><AddQuestionPage /></Private>} />
          <Route exact path="/question" element={<Private><ViewQuestion /></Private>} />
          <Route exact path="" element={<SuperHome/>}/>
          <Route exact path="/profile" element={<Private><UserProfilePage/></Private>} />
          <Route exact path="/edit-profile" element={<Private><UserEditProfilePage/></Private>} />
          <Route exact path='/otp-page' element={<Otp/>} />
          <Route exact path='/view-question' element={<Private><ViewQuestionPage/></Private>} />
          <Route exact path="/messenger" element={<Private><Messenger/></Private>}/>
          <Route exact path="/page" element={<CommunityHomePage/>}/>
          <Route exact path="/community" element={<CommunityHomePage/>}/>
          <Route exact path="/single-community/:id" element={<SingleCommunityPage/>}/>
          <Route path="/*" element={<ErrorPage />} />
          </Routes>
  </>
  )

}

export default UserRoute;