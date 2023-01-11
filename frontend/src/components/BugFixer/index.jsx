import React from 'react';
import './css/index.css';
import Main from "./Main";
import Sidebar from "./Sidebar";
let a =10;
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
