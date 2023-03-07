import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../../../redux/features/alertSlice";
import { setAdminDetails } from "../../../redux/features/adminSlice";
import { useNavigate } from "react-router-dom";
import { setAdminToken } from "../../../redux/features/adminTokenSlice";
import toast, { Toaster } from "react-hot-toast";
import DOMPurify from "dompurify";
import "./AdminLogin.css";

function AdminLogin() {
  const navigate = useNavigate();
  const [data, setData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(showLoading());

      const url = `${import.meta.env.VITE_APP_BACKEND_URL}/admin/admin-login`;

      dispatch(hideLoading());

      const sanitizedData = {
        username: DOMPurify.sanitize(data.username),
        password: DOMPurify.sanitize(data.password),
      };
      const { data: res } = await axios.post(url, sanitizedData);
      localStorage.setItem("AdminToken", res.data);
      dispatch(setAdminToken(res.data));
      try {
        dispatch(setAdminDetails(data));
        navigate("/admin/admin-dashboard");
      } catch (error) {
        toast.error("Check your username and password");
      }
    } catch (error) {
      console.log("error in adin lihin jnfuhd ", error);
      dispatch(hideLoading());
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
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

            <button className="btn " style={{ backgroundColor: "#243b55" }}>
              Submit
            </button>

            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default AdminLogin;
