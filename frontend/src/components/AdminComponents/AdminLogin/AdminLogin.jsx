import React, {  useState } from "react";
import "./AdminLogin.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../../../redux/features/alertSlice";
import { alertState } from "../../../redux/features/alertSlice";
import { adminState, setAdminDetails } from "../../../redux/features/adminSlice";
import { Navigate } from "react-router-dom";

function AdminLogin() {


  const [data, setData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const { loading } = useSelector(alertState);
  const {adminDetails} = useSelector(adminState)
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(showLoading());
      setTimeout(async () => {
        const url = "http://localhost:8080/admin/admin-login";
        dispatch(hideLoading());

        const { data: res } = await axios.post(url, data);
        console.log(data);
        localStorage.setItem("AdminToken", res.data);
       try {
        dispatch(setAdminDetails(data))
        window.location= ('/admin-dashboard')
       } catch (error) {
       
        console.log(error.message);
        
       }
      }, 800);
    } catch (error) {
      dispatch(hideLoading());
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        console.log(error.response.data.message);
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className="bodyAdmin">
      <div className="container">
        <div className="login-box">
          <h2>Admin 𝐋𝐨𝐠𝐢𝐧</h2>
          <form onSubmit={handleSubmit}>
            <div className="user-box">
              <input
                type="text"
                name="username"
                onChange={handleChange}
                value={data.username}
                required=""
              />
              <label>Username</label>
            </div>
            <div className="user-box">
              <input
                type="password"
                name="password"
                onChange={handleChange}
                value={data.password}
                required=""
              />
              <label>Password</label>
            </div>
            {error && (
              <div>
                {" "}
                <p className="error-show">{error}</p>
              </div>
            )}
            <a href="">
              <button style={{ backgroundColor: "#243b55" }}>Submit</button>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
