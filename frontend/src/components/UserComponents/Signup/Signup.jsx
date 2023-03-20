import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Signup.css";
import axios from "../../../config/axiosInstance";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../../../redux/features/userSlice";
import { showLoading , hideLoading }  from '../../../redux/features/alertSlice'
const info = [
  {
    icon: (
      <i
        className="fas fa-question-circle text-primary mr-2"
        style={{ fontSize: "20px", color: "rgb(10, 149, 255)" }}
      ></i>
    ),
    text: "Get unstuck — ask a question",
  },
  {
    icon: (
      <i
        className="fas fa-sort text-primary mr-2"
        style={{ fontSize: "25px", color: "rgb(10, 149, 255)" }}
      ></i>
    ),
    text: "Unlock new privileges like voting and commenting",
  },
  {
    icon: (
      <i
        className="fas fa-tags text-primary mr-2"
        style={{ fontSize: "20px", color: "rgb(10, 149, 255)" }}
      ></i>
    ),
    text: "Unlock new privileges like voting and commenting",
  },
  {
    icon: (
      <i
        className="fas fa-trophy text-primary mr-2"
        style={{ fontSize: "20px", color: "rgb(10, 149, 255)" }}
      ></i>
    ),
    text: "Unlock new privileges like voting and commenting",
  },
];

const Signup = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `/api/userSignup`;
      const { data: res } = await axios.post(url, data).then((res) => {
        dispatch(setUserDetails(res, res.data.OTP));
        navigate("/user/otp-page");
      });
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
        console.log();
      }
    }
  };

  return (
    <>
      <div className="signupPage">
        <section className=" bodySection">
          <div className="container py-5">
            <div className="row d-flex align-items-center justify-content-center h-100">
              {/* left Side Stack Overflow community part started*/}
              <div className="col-md-8 col-lg-7 col-xl-6 ml-3">
                <img
                  src="https://res.cloudinary.com/dmvxmurxw/image/upload/v1674187605/logo4_g8zbar.png"
                  alt=""
                  width="250px"
                />
                <h3 className="font-weight-normal my-3">
                  Join the Bugfixer community
                </h3>

                {info.map((text) => {
                  return (
                    <div className="my-3">
                      {text.icon}
                      {text.text}
                    </div>
                  );
                })}
                <div className="mt-4">
                  <small>
                    Collaborate and share knowledge with a private group for
                    FREE. <br />
                    <Link to="/">
                      Get Bugfixer for Teams free for up to 50 users.
                    </Link>
                  </small>
                </div>
              </div>
              {/* left Side Stack Overflow community part Ends*/}

              {/* Signup form started */}
              <div className="col-md-7 col-lg-5 col-xl-5 bt-light border p-5 pb-0">
                <h2
                  className="text-center"
                  style={{
                    color: "rgb(242, 116, 13)",
                    fontFamily: "serif",
                  }}
                >
                  Sign up
                </h2>
                <p className="text-center pb-1">~~~~~~~~~~~</p>
                <form onSubmit={handleSubmit}>
                  <div className="form-outline mb-4">
                    <label className="form-label" for="form1Example13">
                      Full Name
                    </label>
                    <div className="input-group flex-nowrap">
                      <div className="input-group-prepend">
                        <span
                          className="input-group-text"
                          id="addon-wrapping"
                          style={{
                            color: "rgb(242, 116, 13)",
                            backgroundColor: "rgba(242, 116, 13, 0.308)",
                          }}
                        >
                          <i className="fas fa-user"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="firstName"
                        name="firstName"
                        onChange={handleChange}
                        value={data.firstName}
                        required
                        aria-label="Username"
                        aria-describedby="addon-wrapping"
                      />
                    </div>
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label" for="form1Example23">
                      Last Name
                    </label>
                    <div className="input-group flex-nowrap">
                      <div className="input-group-prepend">
                        <span
                          className="input-group-text"
                          id="addon-wrapping"
                          style={{
                            color: "rgb(242, 116, 13)",
                            backgroundColor: "rgba(242, 116, 13, 0.308)",
                          }}
                        >
                          <i className="fas fa-user"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="last name"
                        name="lastName"
                        onChange={handleChange}
                        value={data.lastName}
                        required
                        aria-label="Username"
                        aria-describedby="addon-wrapping"
                      />
                    </div>
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label" for="form1Example23">
                      Email
                    </label>
                    <div className="input-group flex-nowrap">
                      <div className="input-group-prepend">
                        <span
                          className="input-group-text"
                          id="addon-wrapping"
                          style={{
                            color: "rgb(242, 116, 13)",
                            backgroundColor: "rgba(242, 116, 13, 0.308)",
                          }}
                        >
                          <i className="fas fa-envelope"></i>
                        </span>
                      </div>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="email"
                        name="email"
                        onChange={handleChange}
                        value={data.email}
                        required
                        aria-label="Username"
                        aria-describedby="addon-wrapping"
                      />
                    </div>
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label" for="form1Example23">
                      Phone
                    </label>
                    <div className="input-group flex-nowrap">
                      <div className="input-group-prepend">
                        <span
                          className="input-group-text"
                          id="addon-wrapping"
                          style={{
                            color: "rgb(242, 116, 13)",
                            backgroundColor: "rgba(242, 116, 13, 0.308)",
                          }}
                        >
                          <i className="fas fa-mobile"></i>
                        </span>
                      </div>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Phone"
                        name="phone"
                        onChange={handleChange}
                        value={data.phone}
                        required
                        aria-label="Username"
                        aria-describedby="addon-wrapping"
                      />
                    </div>
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label" for="form1Example23">
                      Password
                    </label>
                    <div className="input-group flex-nowrap">
                      <div className="input-group-prepend">
                        <span
                          className="input-group-text"
                          id="addon-wrapping"
                          style={{
                            color: "rgb(242, 116, 13)",
                            backgroundColor: "rgba(242, 116, 13, 0.308)",
                          }}
                        >
                          <i className="fas fa-key"></i>
                        </span>
                      </div>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="password"
                        name="password"
                        onChange={handleChange}
                        value={data.password}
                        required
                        aria-label="Username"
                        aria-describedby="addon-wrapping"
                      />
                    </div>
                  </div>
                    {error && <div className="errorShow">{error} </div>}
                  <button
                    className="btn btn-block bg-primary border "
                    type="submit"
                  >
                    signup{" "}
                  </button>
                  <Link to={"/user/login-page"}>
                    <h6 className="alreadyAcc">Already have an account?</h6>
                  </Link>
                </form>
              </div>
              {/* Signup form Ends */}
            </div>
          </div>
        </section>

        {/* modal */}
      </div>
    </>
  );
};

export default Signup;
