import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import ViewQuestion from "./components/UserComponents/ViewQuestion";
import Signup from "./pages/user/UserSignupPage";
import Login from "./pages/user/UserLogin";
import AdminLoginPage from "./components/AdminComponents/AdminLogin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Home from "./pages/user/Home";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "./components/AdminComponents/Spinner";
import AddQuestionPage from "./pages/user/AddQuestionPage";
import { userState } from "./redux/features/userSlice";
import PublicRoute from "./Routes/UserPublicRoute";
import AdminPublicRoute from './Routes/AdminPublicRoute'
import UserManagePage from "./pages/admin/UserManagePage";
import SuperHome from "./pages/user/SuperHomePage";
import UserProfilePage from "./pages/user/UserProfilePage";
import Test from './pages/user/Test'


function App() {
  const user = useSelector(userState);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.alerts);

  return (
    <>
      <Router>
        {loading && <Spinner />}

        <Routes>
          <Route
            exact
            path="/home"
            element={
              <PublicRoute>
                <Home />
              </PublicRoute>
            }
          />
          <Route
            exact
            path="/login-page"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />

          <Route
            exact
            path="/signup-page"
            element={
              <PublicRoute>
                <Signup />
              </PublicRoute>
            }

            
          />
          <Route exact path="/add-question" element={<PublicRoute><AddQuestionPage /></PublicRoute>} />
          <Route exact path="/question" element={<PublicRoute><ViewQuestion /></PublicRoute>} />
          <Route exact path="/profile" element={<UserProfilePage/>} />
          <Route exact path="/" element={<SuperHome/>}/>
          <Route exact path="/test" element={<Test/>} />



          <Route exact path="/admin-login" element={ <AdminPublicRoute><AdminLoginPage /></AdminPublicRoute>} />
          <Route exact path="/admin-dashboard" element={<AdminPublicRoute><AdminDashboard /></AdminPublicRoute>} />
          <Route exact path="/user-manage" element={<AdminPublicRoute><UserManagePage /></AdminPublicRoute>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
