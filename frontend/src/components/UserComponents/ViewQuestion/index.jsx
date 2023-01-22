import React from 'react';
import '../BugFixer/css/index.css';
import MainQuestion from './MainQuestion';
import Sidebar from "../../../components/UserComponents/BugFixer/Sidebar";
import Header from '../Header/Header'
function index() {
  return (
    <>
    <Header/>
    <div className="bugfix-index">
      <div className="bugfix-index-content">
  
        <Sidebar />
       <MainQuestion/>
      </div>
    </div>
    </>
  );
}

export default index;
