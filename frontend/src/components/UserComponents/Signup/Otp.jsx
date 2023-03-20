import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Otp.css";
import toast, { Toaster } from "react-hot-toast";
import axios from "../../../config/axiosInstance";

function Otp() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const { userDetails } = useSelector((state) => state.user);

  const updateInput = (e) => {
    setOtp(e.target.value);
  };
  console.log("otp ", userDetails.data);
  const email = userDetails.data.email;
  let verifyOtp = userDetails.data.OTP;

  //verifying otp
  const checkOtp = (e) => {
    e.preventDefault();
    if (verifyOtp === otp) {
      axios.post("/api/otpVerifying", { email: email }).then((response) => {});
      toast.success("Otp verified");
      navigate("/user/login-page");
    } else {
      toast.error("Otp wrong");
    }
  };

  return (
    <>
      <div
        className="container loginPage"
        style={{
          minwidth: "410px",
          maxWidth: "550px",
          marginTop: "8%",
          marginBottom: "5%",
        }}
      >
        <form onSubmit={checkOtp} className="border  pb-5  loginPage--form">
          <div className="loginPage--form--img">
            <br />
            <br />
            <h3 className="center mt-2">OTP</h3>
          </div>
          <div className="form-outline mb-4">
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
                type="text"
                className="form-control"
                placeholder="Otp "
                name="otp"
                value={otp}
                onChange={updateInput}
                required
                aria-label="gmail"
                aria-describedby="addon-wrapping"
              />
            </div>
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" for="formExample23"></label>
          </div>

          <button
            type="submit"
            className="btn btn-lg btn-block btn-sm text-light"
            style={{
              backgroundColor: "rgb(10,149,255)",
            }}
          >
            Submit
          </button>
        </form>
        <Toaster />
      </div>
    </>
  );
}

export default Otp;
