import React from 'react';
import { BrowserRouter as Router,  Route, Routes,Navigate} from 'react-router-dom';
import Question from './components/UserComponents/Add-Question/Question';
import ViewQuestion from './components/UserComponents/ViewQuestion'
import Signup from './pages/user/UserSignupPage';
import Login from './pages/user/UserLogin';
import AdminLoginPage from './components/AdminComponents/AdminLogin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import Home from './pages/user/Home';
import { useSelector } from 'react-redux';
import Spinner from './components/AdminComponents/Spinner';
import UserManagePage from './pages/admin/UserManagePage';


function App() {

 
 const user = localStorage.getItem('token')
const {loading} = useSelector(state => state.alerts)

  return (
    <>
      
      <Router>
        {loading && <Spinner/>}
      
       <Routes>

          <Route exact path='/' element={<Home/>} />
      
          <Route  exact path="/add-question" element={<Question/>} />
          <Route exact path="/question" element={<ViewQuestion/>} />
          <Route exact path='/signup-page' element={<Signup/>} />
          <Route exact path='/login-page' element={<Login/>}/>
          <Route path='/' exact element={<Navigate replace to='/login-page'/>}/>

          <Route exact path='/admin-login' element={<AdminLoginPage />}/>
          <Route exact path='/admin-dashboard' element={<AdminDashboard/>} />
          <Route exact path='/user-manage' element={<UserManagePage/>} />
         

       </Routes>
       
      </Router>
    </>
  );
}

export default App;
