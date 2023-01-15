import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/download.png";
import gLogo from "../Images/g.png";



const info = [
  {
    icon: (
      <i
        class="fas fa-question-circle text-primary mr-2"
        style={{ fontSize: "20px", color: "rgb(10, 149, 255)" }}
      ></i>
    ),
    text: "Get unstuck — ask a question",
  },
  {
    icon: (
      <i
        class="fas fa-sort text-primary mr-2"
        style={{ fontSize: "25px", color: "rgb(10, 149, 255)" }}
      ></i>
    ),
    text: "Unlock new privileges like voting and commenting",
  },
  {
    icon: (
      <i
        class="fas fa-tags text-primary mr-2"
        style={{ fontSize: "20px", color: "rgb(10, 149, 255)" }}
      ></i>
    ),
    text: "Unlock new privileges like voting and commenting",
  },
  {
    icon: (
      <i
        class="fas fa-trophy text-primary mr-2"
        style={{ fontSize: "20px", color: "rgb(10, 149, 255)" }}
      ></i>
    ),
    text: "Unlock new privileges like voting and commenting",
  },
];

const Signup = () => {
  return (
    <>
      <div className="signupPage">
        <section className="vh-100">
          <div className="container py-5">
            <div className="row d-flex align-items-center justify-content-center h-100">
              {/* left Side Stack Overflow community part started*/}
              <div className="col-md-8 col-lg-7 col-xl-6 ml-3">
                <img src={Logo} alt="" width="250px" />
                <h3 className="font-weight-normal my-3">
                  Join the Stack Overflow community
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
                      Get Stack Overflow for Teams free for up to 50 users.
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
                <form>
                  <div className="form-outline mb-4">
                    <label className="form-label" for="form1Example13">
                      Full Name
                    </label>
                    <div class="input-group flex-nowrap">
                      <div class="input-group-prepend">
                        <span
                          class="input-group-text"
                          id="addon-wrapping"
                          style={{
                            color: "rgb(242, 116, 13)",
                            backgroundColor: "rgba(242, 116, 13, 0.308)",
                          }}
                        >
                          <i class="fas fa-user"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="addon-wrapping"
                      
                      />
                    </div>
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label" for="form1Example23">
                      Email
                    </label>
                    <div class="input-group flex-nowrap">
                      <div class="input-group-prepend">
                        <span
                          class="input-group-text"
                          id="addon-wrapping"
                          style={{
                            color: "rgb(242, 116, 13)",
                            backgroundColor: "rgba(242, 116, 13, 0.308)",
                          }}
                        >
                          <i class="fas fa-envelope"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="hello@gmail.com"
                        aria-label="gmail"
                        aria-describedby="addon-wrapping"
                      />
                    </div>
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label" for="form1Example23">
                      Password
                    </label>
                    <div class="input-group flex-nowrap">
                      <div class="input-group-prepend">
                        <span
                          class="input-group-text"
                          id="addon-wrapping"
                          style={{
                            color: "rgb(242, 116, 13)",
                            backgroundColor: "rgba(242, 116, 13, 0.308)",
                          }}
                        >
                          <i class="fas fa-key"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Password"
                        aria-label="Username"
                        aria-describedby="addon-wrapping"
                      />
                    </div>
                  </div>

                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="form1Example3"
                    />
                    <label className="form-check-label" for="form1Example3">
                      {" "}
                      Remember me{" "}
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-block text-light"
                    style={{ backgroundColor: "rgb(10, 149, 255)" }}
                  >
                    Sign up
                  </button>
                  <button
                    type="submit"
                    className="btn btn-block bg-light border"
                  >
                    <img src={gLogo} alt="" width="20px" className="mr-1" />
                    Google
                  </button>
                  <button type="submit" className="btn btn-dark btn-block">
                    <i class="fab fa-github mr-1"></i>
                    Github
                  </button>
                  <button
                    type="submit"
                    className="btn bt btn-lg btn-block text-light"
                    style={{ backgroundColor: "rgb(56, 84, 153)" }}
                  >
                    <i class="fab fa-facebook-square mr-2"></i>
                    Facebook
                  </button>
                </form>
              </div>
              {/* Signup form Ends */}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Signup;
