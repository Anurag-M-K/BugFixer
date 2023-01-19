import React from 'react';
import Header from '../Header/Header';
import './css/index.css';
import Main from "./Main";
import Sidebar from "./Sidebar";

function index() {
  return (
    <div className="bugfix-index">
      <div className="bugfix-index-content">
      
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default index;
