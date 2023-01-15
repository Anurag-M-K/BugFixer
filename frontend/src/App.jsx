import React from 'react';
import './App.css';


import { BrowserRouter as Router,  Route, Routes} from 'react-router-dom';
import BugFixer from './user/UserComponents/BugFixer'
import Question from './user/UserComponents/Add-Question/Question';
import ViewQuestion from './user/UserComponents/ViewQuestion'
import Signup from './user/UserComponents/Signup/Signup';
import Login from './user/UserComponents/Login/Login';
import Header from './user/UserComponents/Header/Header';
import AdminLoginPage from './pages/admin/AdminLoginPage';



function App() {
 
 
  return (
    <div className="App">
      <Router>
        <Header />
       <Routes>

          <Route exact path="/add-question" element={<Question/>} />
          <Route exact path="/question" element={<ViewQuestion/>} />
          <Route exact path="/" element={<BugFixer/>} />
          <Route exact path='/signup-page' element={<Signup/>} />
          <Route exact path='/login-page' element={<Login/>}/>
          <Route exact path='/admin-login' element={<AdminLoginPage/>}/>

         

       </Routes>
       
      </Router>
    </div>
  );
}

export default App;
