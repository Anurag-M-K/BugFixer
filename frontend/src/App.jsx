import React from "react";
import {  Route, Routes } from "react-router-dom";
import AdminRouter from "./Routes/AdminRouter";
import UserRoute from "./Routes/UserRouter";
import ErrorPage from './pages/ErrorPage/ErrorPage'
import { useSelector } from "react-redux";
import Spinner from './components/Loading/Spinner'
function App() {
  const {loading} = useSelector(state=>state.alerts)
  return (
    <>
    {loading ? (
    <Spinner/>
    ) : (

    <Routes>
      <Route exact path="/admin/*" element={<AdminRouter />} />
      <Route exact path="/*" element={<UserRoute />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
    )}
    </>
  );
}

export default App;
