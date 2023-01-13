import React from 'react';
import '../BugFixer/css/index.css';
import MainQuestion from './MainQuestion';
import Sidebar from "../BugFixer/Sidebar";

function index() {
  return (
    <div className="bugfix-index">
      <div className="bugfix-index-content">
        <Sidebar />
       <MainQuestion/>
      </div>
    </div>
  );
}

export default index;
