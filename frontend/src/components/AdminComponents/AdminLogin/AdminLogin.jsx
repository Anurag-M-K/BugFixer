import React, { useState } from "react";
import "./AdminLogin.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../../../redux/features/alertSlice";
import {
  setAdminDetails,
} from "../../../redux/features/adminSlice";
import { useNavigate } from "react-router-dom";
import { setAdminToken  } from "../../../redux/features/adminTokenSlice";
import toast, { Toaster } from "react-hot-toast";

function AdminLogin() {
  const navigate = useNavigate();
  const [data, setData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const { loading } = useSelector((state) => state.admin);
  const dispatch = useDispatch();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(showLoading());
      setTimeout(async () => {
        const url = "http://localhost:80/admin/admin-login";

        dispatch(hideLoading());

        const { data: res } = await axios.post(url, data)
          localStorage.setItem("AdminToken", res.data);
          try {
            dispatch(setAdminToken(res.data));
            dispatch(setAdminDetails(data));
            navigate("/admin-dashboard");
          } catch (error) {
            console.log(error.message);
            toast.error("Check your username and password")
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
              <button className="btn " style={{ backgroundColor: "#243b55", }}>Submit</button>

              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </a>
          </form>
        </div>
      </div>
      <Toaster/>
    </div>
  );
}

export default AdminLogin;
