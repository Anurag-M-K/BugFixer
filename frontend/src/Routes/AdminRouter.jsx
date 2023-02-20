import React from "react";
import AdminDashboard from "../pages/admin/AdminDashboard";
import { useSelector } from "react-redux";
import AdminPrivateRoute from '../PrivateRoutes/AdminRoute'
import UserManagePage from "../pages/admin/UserManagePage";
import AdminQuestionPage from "../pages/admin/AdminQuestionPage";
import AdminLoginPage from '../components/AdminComponents/AdminLogin/AdminLogin';
import { Route ,Routes } from 'react-router-dom';
import AdminCommunityPage from "../pages/admin/AdminCommunityPage";
// import AdminLayout from '../Layout/AdminLayout'


function AdminRouter() {
 const { loading } = useSelector(state => state.alerts);

  return (
    <>
    {/* {loading && <Spinner />} */}
      <Routes>
          <Route exact path="/admin-login" element={ <AdminPrivateRoute><AdminLoginPage /></AdminPrivateRoute>} />
          {/* <Route element={<AdminLayout/>}> */}
          <Route exact path="/admin-dashboard" element={<AdminPrivateRoute><AdminDashboard /></AdminPrivateRoute>} />
          <Route exact path="/user-manage" element={<AdminPrivateRoute><UserManagePage /></AdminPrivateRoute>} />
          <Route exact path="/Question-manage" element={<AdminPrivateRoute><AdminQuestionPage/></AdminPrivateRoute>} />
          <Route exact path="/admin-community" element={<AdminPrivateRoute><AdminCommunityPage/></AdminPrivateRoute>} />
          {/* </Route> */}
      </Routes>
    </>
  );
}

export default AdminRouter;
