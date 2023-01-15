import React from 'react'
import './Login.css';
import {Link} from 'react-router-dom'
// import Logo from "../Images/download.png";



function Login() {
  return (
<>
<div className='container loginPage' style={{
    minwidth:"410px"
}}>
    <form className="border px-5 pb-5 m-5 loginPage--form">
        <div className='loginPage--form--img'><br /><br />
            <h3 className='center mt-2'>Login</h3>
        </div>
        <div className='form-outline mb-4'>
        <label className='form-label' for="form1Example23">Your Email</label>
        <div className='input-group flex-nowrap'>
            <div className='input-group-prepend'>
                <span className='input-group-text'
                id='addon-wrapping' style={{
                    color:"rgb(242,116,13)",
                    backgroundColor:"rgba(242,116,13,0.308)",
                }}>
                    <i className='fas fa-envelope'></i>
                </span>
            </div>
            <input type="text" className='form-control'
            placeholder='@gmail.com' 
            aria-label='gmail'
            aria-describedby='addon-wrapping' />
        </div>
        </div>
        <div className='form-outline mb-4'>
            <label  className='form-label' for="formExample23">Password</label>
            <div className='input-group flex-nowrap'>
                <div className='input-group-prepend'>
                    <span className='input-group-text' id='addon-wrapping'
                    style={{
                        color:"rgb(242,116,13)",
                        backgroundColor:"rgba(242,116,13,0.308)",
                    }}>
                        <i className='fas fa-key'></i>
                    </span>
                </div>
                <input type="text"
                className='form-control' 
                placeholder='Password'
                aria-label='Username'
                aria-describedby='addon-wrapping' />
            </div>
        </div>
        <div className='d-flex justify-content-between mb-4'>
            <div className='form-check mb-2'>
                <input type="checkbox"
                value=''
                id='formExample3' />
                <label className='form-check-label' for='form1Example3'>
                    Remember me
                </label>
            </div>
            <Link to={'/'}>
                <small>forgot Password ?</small>
            </Link>
        </div>
        <button type='submit' className='btn btn-lg btn-block btn-sm text-light'
        style={{
            backgroundColor:"rgb(10,149,255)"
        }}>Signup</button>
        <button type='submit' className='btn btn-lg btn-block bg-light btn-sm border'><img src='' alt="" width="15px" className='mr-1' />
        Google</button>
        <button type='submit' className='btn bt btn-lg btn-block btn-sm text-light' 
        style={{
            backgroundColor:"rgb(565,84,153)"
        }}>Facebook</button>
    </form>
</div>
</>
  )
}

export default Login