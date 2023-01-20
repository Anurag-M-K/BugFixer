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
import UserManagePage from "./pages/admin/UserManagePage";
import AddQuestionPage from "./pages/user/AddQuestionPage";
import { userState } from "./redux/features/userSlice";
import PublicRoute from "./Routes/PublicRoute";

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
            path="/"
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
          <Route exact path="/add-question" element={<AddQuestionPage />} />
          <Route exact path="/question" element={<ViewQuestion />} />

          <Route exact path="/admin-login" element={<AdminLoginPage />} />
          <Route exact path="/admin-dashboard" element={<AdminDashboard />} />
          <Route exact path="/user-manage" element={<UserManagePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
