import React, { useState } from "react";
import axios from "../../../config/axiosInstance";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setUserDetails } from "../../../redux/features/userSlice";
import gLogo from '../Images/g.png'
import {  hideLoading, showLoading } from "../../../redux/features/alertSlice";
import toast , {Toaster} from "react-hot-toast";






function Login() {
  const navigate = useNavigate()
  const [data, setData] = useState({   email: "", password: "" });
  const [error, setError] = useState("");

  const dispatch = useDispatch()
  const {loading} = useSelector(state=>state.alerts)


  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
		try {
      // dispatch(showLoading())
			const url = "/api/userLogin";
      // dispatch(hideLoading())  
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("userToken", res.data);
      
      toast.success("login successfull")
      try {
        dispatch(setUserDetails(res.user))
        dispatch(setToken(res.data))
        navigate("/home");

        
      } catch (error) {
        console.log(error.message);
        
      }      
		} catch (error) {
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
    <>
      <div
        className="container loginPage"
        style={{
          minwidth: "410px",maxWidth:"550px",marginTop:"8%",marginBottom:"5%"
        }}
      >
        <form
          onSubmit={handleSubmit }
          className="border  pb-5  loginPage--form"
        >
          <div className="loginPage--form--img">
            <br />
            <br />
            <h3 className="center mt-2">Login</h3>
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" for="form1Example23">
              Your Email
            </label>
            <div className="input-group flex-nowrap">
              <div className="input-group-prepend">
                <span
                  className="input-group-text"
                  id="addon-wrapping"
                  style={{
                    color: "rgb(242,116,13)",
                    backgroundColor: "rgba(242,116,13,0.308)",
                  }}
                >
                  <i className="fas fa-envelope"></i>
                </span>
              </div>
              <input
                type="email"
                className="form-control"
                placeholder="@gmail.com"
                name="email"
                onChange={handleChange}
                value={data.email}
                required
                aria-label="gmail"
                aria-describedby="addon-wrapping"
              />
            </div>
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" for="formExample23">
              Password
            </label>
            <div className="input-group flex-nowrap">
              <div className="input-group-prepend">
                <span
                  className="input-group-text"
                  id="addon-wrapping"
                  style={{
                    color: "rgb(242,116,13)",
                    backgroundColor: "rgba(242,116,13,0.308)",
                  }}
                >
                  <i className="fas fa-key"></i>
                </span>
              </div>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={data.password}
                required
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />
            </div>
          </div>
          {error && <div  ><p className="error-show">{error}</p></div>}

         <button
            type="submit"
            className="btn btn-lg btn-block btn-sm text-light"
            style={{
              backgroundColor: "rgb(10,149,255)",
            }}
          >
            Login
          </button>
        <div className="gbtn">
          <button  
                    type="submit"
                    className="btn btn-block bg-light border "
                  >
                    <img src={gLogo} alt="" width="20px" className="mr-1" />
                    Google
                  </button></div>
                  <Link to={'/signup-page'} >
          <h6 className="createAcc">Create new Account</h6></Link> 
        </form>
        <Toaster/>
      </div>
    </>
  );
}

export default Login;
