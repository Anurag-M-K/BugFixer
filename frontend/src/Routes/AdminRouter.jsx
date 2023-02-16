import React from "react";
import AdminDashboard from "../pages/admin/AdminDashboard";
import { useSelector } from "react-redux";
import AdminPrivateRoute from '../PrivateRoutes/AdminRoute'
import UserManagePage from "../pages/admin/UserManagePage";
import AdminQuestionPage from "../pages/admin/AdminQuestionPage";
import AdminLoginPage from '../components/AdminComponents/AdminLogin/AdminLogin';
import { Route ,Routes,BrowserRouter as Router } from 'react-router-dom';


function AdminRouter() {
 const { loading } = useSelector(state => state.alerts);

  return (
    <>
    {loading && <Spinner />}
      <Routes>
          <Route exact path="/admin-login" element={ <AdminPrivateRoute><AdminLoginPage /></AdminPrivateRoute>} />
          <Route exact path="/admin-dashboard" element={<AdminPrivateRoute><AdminDashboard /></AdminPrivateRoute>} />
          <Route exact path="/user-manage" element={<AdminPrivateRoute><UserManagePage /></AdminPrivateRoute>} />
          <Route exact path="/Question-manage" element={<AdminPrivateRoute><AdminQuestionPage/></AdminPrivateRoute>} />
      </Routes>
    </>
  );
}

export default AdminRouter;
