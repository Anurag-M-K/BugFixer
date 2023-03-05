import React from "react";
import {  Route, Routes } from "react-router-dom";
import AdminRouter from "./Routes/AdminRouter";
import UserRoute from "./Routes/UserRouter";
import ErrorPage from './pages/ErrorPage/ErrorPage'
function App() {
  return (
    <Routes>
      <Route exact path="/admin/*" element={<AdminRouter />} />
      <Route exact path="/*" element={<UserRoute />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
