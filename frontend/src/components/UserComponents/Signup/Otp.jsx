import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './Otp.css';
import toast,{Toaster} from  'react-hot-toast';
function Otp() {

    const navigate = useNavigate()

const [otp , setOtp] = useState('')

const {userDetails} = useSelector(state => state.user)
      
const updateInput = (e)=>{
    setOtp(e.target.value)
  }




let verifyOtp = userDetails.data.OTP
const checkOtp = ()=>{
console.log("here")
        if(verifyOtp === otp ){
			toast.success("Otp verified")
            // alert("correct")
            navigate("/login-page")
        }else{
            // alert("wrong ")
			toast.error("Otp wrong")
        }
    
  
}
 

//   return (
//     <div className="d-flex justify-content-center">
//     <div className="container-fluid bg-light main-containers	">
// 		<div className="row main-content bg-success ">
// 			<div className="col-md-4 text-center company__info">
// 				<h4 className="company_title fw-bold">Cric Store</h4>
// 			</div>
// 			<div className="col-md-8 col-xs-12 col-sm-12 login_form ">
// 				<div className="container-fluid">
// 					<div className="row">
// 						<h2 className="mt-3 fw-bold">Enter OTP</h2>
// 					</div>
// 					<div className="row">
// 						<form   className="form-group">
// 							<div className="row">
// 								<input type="text" name="otp"  value={otp} onChange={updateInput} placeholder="enter otp" className="form__input" /><span name="otpErrorDisplay"></span>
// 							</div>
							
							
// 							<div className="row justify-content-center" >
// 								<button type="submit" onClick={checkOtp} className="btnbtn">ok</button>
// 							</div>
// 						</form>
// 					</div>
					
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// 	<Toaster/>
//     </div>





//   )



 return (
    <>
      <div
        className="container loginPage"
        style={{
          minwidth: "410px",maxWidth:"550px",marginTop:"8%",marginBottom:"5%"
        }}
      >
        <form
          className="border  pb-5  loginPage--form"
        >
          <div className="loginPage--form--img">
            <br />
            <br />
            <h3 className="center mt-2">OTP</h3>
          </div>
          <div className="form-outline mb-4">
           
            <div className="input-group flex-nowrap">
              <div className="input-group-prepend">
                <span
                  className="input-group-text"
                  id="addon-wrapping"
                  style={{
                    color: "rgb(242,116,13)",
                    backgroundColor: "rgba(242,116,13,0.308)",
                  }}
                >
                  <i className="fas fa-envelope"></i>
                </span>
              </div>
              <input
                type="email"
                className="form-control"
                placeholder="Otp "
                name="otp"  value={otp} onChange={updateInput}
              
                required
                aria-label="gmail"
                aria-describedby="addon-wrapping"
              />
            </div>
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" for="formExample23">
             
            </label>
  
          </div>
          

         <button
             type="submit" onClick={checkOtp}
            className="btn btn-lg btn-block btn-sm text-light"
            style={{
              backgroundColor: "rgb(10,149,255)",
            }}
          >
            Submit
          </button>
        
        </form>
        <Toaster/>
      </div>
    </>
  );
}

export default Otp