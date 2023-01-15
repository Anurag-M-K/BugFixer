import React from 'react';
import './App.css';
import { BrowserRouter as Router,  Route, Routes,Navigate} from 'react-router-dom';
import BugFixer from './components/UserComponents/BugFixer'
import Question from './components/UserComponents/Add-Question/Question';
import ViewQuestion from './components/UserComponents/ViewQuestion'
import Signup from './components/UserComponents/Signup/Signup';
import Login from './components/UserComponents/Login/Login';
import Header from './components/UserComponents/Header/Header';
// import AdminLoginPage from './pages/admin/AdminLoginPage';



function App() {
 
 const user = localStorage.getItem('token')
  return (
    <div className="App">
      
      <Router>
        <Header />
       <Routes>

          {user && <Route exact path="/" element={<BugFixer/>} />}
          <Route exact path="/add-question" element={<Question/>} />
          <Route exact path="/question" element={<ViewQuestion/>} />
          <Route exact path='/signup-page' element={<Signup/>} />
          <Route exact path='/login-page' element={<Login/>}/>
          <Route path='/' exact element={<Navigate replace to='/login'/>}/>
          {/* <Route exact path='/admin-login' element={<AdminLoginPage/>}/> */}

         

       </Routes>
       
      </Router>
    </div>
  );
}

export default App;
