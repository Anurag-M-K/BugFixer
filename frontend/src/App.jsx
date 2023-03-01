import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "./components/AdminComponents/Spinner";
import AdminRouter from "./Routes/AdminRouter";
import UserRoute from "./Routes/UserRouter";


function App() {
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.alerts);

  return (
    <>
      <Router>
        {loading && <Spinner />}
        <Routes>
          <Route exact path="/*" element={<AdminRouter/>} />
        </Routes>
        <Routes>
          <Route exact path="/*" element={<UserRoute/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
