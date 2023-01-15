import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { Link } from "react-router-dom";
// import Logo from "../Images/download.png";

function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/userLogin";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/";
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
          minwidth: "410px",
        }}
      >
        <form
          onSubmit={handleSubmit}
          className="border px-5 pb-5 m-5 loginPage--form"
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
          {error && <div className={styles.error_msg}>{error}</div>}

          <button
            type="submit"
            className="btn btn-lg btn-block btn-sm text-light"
            style={{
              backgroundColor: "rgb(10,149,255)",
            }}
          >
            Login
          </button>
         <Link className="m-1" to={'/signup-page'}><button
            type="submit"
            className="btn btn-lg btn-block bg-light btn-sm border"
          >
            <img src="" alt="" width="15px" className="mr-1" />
            Create a new Account
          </button></Link> 
          <button
            type="submit"
            className="btn bt btn-lg btn-block btn-sm text-light"
            style={{
              backgroundColor: "rgb(565,84,153)",
            }}
          >
            Facebook
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
