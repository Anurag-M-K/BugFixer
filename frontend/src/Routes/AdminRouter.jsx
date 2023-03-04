import React from "react";
import AdminDashboard from "../pages/admin/AdminDashboard";
import { useSelector } from "react-redux";
import AdminPrivateRoute from '../PrivateRoutes/AdminRoute'
import UserManagePage from "../pages/admin/UserManagePage";
import AdminQuestionPage from "../pages/admin/ReportedQuestionPage";
import AdminLoginPage from '../components/AdminComponents/AdminLogin/AdminLogin';
import { Route ,Routes } from 'react-router-dom';
import AdminCommunityPage from "../pages/admin/AdminCommunityPage";
import QuestionManagePage from '../pages/admin/QuestionManagePage'
import TagsAddPage from "../pages/admin/TagsAddPage";
import AdminErrorPage from "../pages/ErrorPage/AdminErrorPage";

function AdminRouter() {
 const { loading } = useSelector(state => state.alerts);
  return (
    <>
            <Routes>
   {loading ? (
           <Spinner />
          ) : (  
          <Route exact path="/admin-login" element={ <AdminPrivateRoute><AdminLoginPage /></AdminPrivateRoute>} />
        )}
          <Route exact path="/admin-dashboard" element={<AdminPrivateRoute><AdminDashboard /></AdminPrivateRoute>} />
          <Route exact path="/user-manage" element={<AdminPrivateRoute><UserManagePage /></AdminPrivateRoute>} />
          <Route exact path="/reported-question-manage" element={<AdminPrivateRoute><AdminQuestionPage/></AdminPrivateRoute>} />
          <Route exact path="/admin-community" element={<AdminPrivateRoute><AdminCommunityPage/></AdminPrivateRoute>} />
          <Route exact path="/question-manage" element={<AdminPrivateRoute><QuestionManagePage/></AdminPrivateRoute>} />
          <Route exact path="/tag-manage" element={<AdminPrivateRoute><TagsAddPage/></AdminPrivateRoute>} />
          <Route path="/*" element={<AdminErrorPage />} />
      </Routes>
    </>
  );
}

export default AdminRouter;
