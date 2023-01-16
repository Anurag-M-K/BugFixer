import React, { useState } from 'react';
import { BrowserRouter as Router,  Route, Routes,Navigate} from 'react-router-dom';
import BugFixer from './components/UserComponents/BugFixer'
import Question from './components/UserComponents/Add-Question/Question';
import ViewQuestion from './components/UserComponents/ViewQuestion'
import Signup from './pages/user/UserSignupPage';
import Login from './pages/user/UserLogin';
import Header from './components/UserComponents/Header/Header';
import AdminLoginPage from './components/AdminComponents/AdminLogin/AdminLogin';



function App() {
 
 const user = localStorage.getItem('token')
 const[isAdmin, setIsAdmin] = useState(true)
  return (
    <>
      
      <Router>
        <Header   />
       <Routes>

          {user && <Route exact path="/" element={<BugFixer/>} />}
          <Route exact path="/add-question" element={<Question/>} />
          <Route exact path="/question" element={<ViewQuestion/>} />
          <Route exact path='/signup-page' element={<Signup/>} />
          <Route exact path='/login-page' element={<Login/>}/>
          <Route path='/' exact element={<Navigate replace to='/login-page'/>}/>
          <Route exact path='/admin-login' element={<AdminLoginPage/>}/>

         

       </Routes>
       
      </Router>
    </>
  );
}

export default App;
