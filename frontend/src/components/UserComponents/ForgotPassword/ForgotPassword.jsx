import React, { useState } from 'react';
import { useFormik } from "formik";
import  toast, { Toaster } from 'react-hot-toast';
import { passwordReset } from '../../../helper/forgotPassword';

function ForgotPassword() {
    const [msg, setMsg] = useState("");
    const [error, setError] = useState("");

    const onSubmit = async (values)=>{
        try {
            const data = await passwordReset(values.email);
            setMsg(data.message);
            setError("");
            toast.success("Reset password link sent to your email");
        } catch (error) {
            setError(error.response?.data?.message || "Something went wrong");
            setMsg("");
        }
    };
    
    const { values , handleChange , handleSubmit } = useFormik({
        initialValues:{
            email:""
        },
        onSubmit,
    });

    return (
        <>
            <Toaster />
            <div className="container loginPage" style={{minWidth: "410px", maxWidth: "550px", marginTop: "8%", marginBottom: "5%"}}>
                <form onSubmit={handleSubmit} className="border  pb-5  loginPage--form">
                    <div className="loginPage--form--img">
                        <br />
                        <br />
                        <h3 className="center mt-2">Forgot Password</h3>
                    </div>
                    <div className="form-outline mb-4">
                        <div className="input-group flex-nowrap">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="addon-wrapping" style={{color: "rgb(242,116,13)", backgroundColor: "rgba(242,116,13,0.308)"}}>
                                    <i className="fas fa-envelope"></i>
                                </span>
                            </div>
                            <input type="email" className="form-control" placeholder="email" value={values.email} onChange={handleChange} name="email" required aria-label="gmail" aria-describedby="addon-wrapping" />
                        </div>
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="formExample23"></label>
                    </div>
                    {error && <div className='text-center'><p>{error}</p></div>}
                    {/* {msg && <div className='text-center'><p>{msg}</p></div>} */}
                    <button type="submit" className="btn btn-lg btn-block btn-sm text-light" style={{backgroundColor: "rgb(10,149,255)"}}>Submit</button>
                </form>
            </div>
        </>
    );
}

export default ForgotPassword;
