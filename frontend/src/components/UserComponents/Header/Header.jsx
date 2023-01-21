import React from "react";
import "./css/Header.css";

import { Link, Navigate, useNavigate } from "react-router-dom";
import { message } from "antd";
function Header() {
 
  const hndleLogout = ()=>{
    localStorage.clear()
    window.location.reload('/login-page')
    message.success("logout successfully")
    
    
  }

  return (
    <nav className="app navbar navbar-expand-lg navbar-light bg-light px-5">
          {/* <span className="navbar-toggler-icon mx-2 ml-5" ></span> */}

          <Link to="/" className="navbar-brand">
            <img src='https://res.cloudinary.com/dmvxmurxw/image/upload/v1674187605/logo4_g8zbar.png' alt="" width="160px" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item mx-4 active">
                <Link className="nav-link">
                <span onClick={hndleLogout}>Logout</span>  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item mr-4">
                <Link to="/" className="nav-link">
                  Products
                </Link>
              </li>
              <li className="nav-item mr-4">
                <Link to="/questions" className="nav-link">
                  Questions
                </Link>
              </li>
              <li className="nav-item mr-4">
                <Link to="/jobs" className="nav-link">
                  Jobs
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/team" className="nav-link">
                  Friends
                </Link>
              </li>
            </ul>
            <form className="form-inline mx-2 my-lg-0 mr-5">
             
              <input
                type="text"
                className="form-control pr-5 pl-4 searchInput fas fa-search search"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
                placeholder="Search..."
              />
              <Link to="/login-page" className="nav-link">
              <button
                className="btn btn-outline-primary my-sm-0 btn-sm px-3"
                type="submit"
                style={{ backgroundColor: "#e3f2fd", color: "gray" }}
              >
                Log in
              </button>
                </Link>

              <Link to="/signup-page" className="nav-link">
              <button
                className="btn btn-primary my-sm-0 btn-sm px-3"
                type="submit"
              >
             
                Sign Up
              </button>
                </Link>
             
            </form>
          </div>
        </nav>
  );
}

export default Header;
