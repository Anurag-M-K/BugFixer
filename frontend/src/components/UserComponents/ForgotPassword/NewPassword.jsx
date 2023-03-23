import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { addingNewPassword } from '../../../helper/forgotPassword';

function NewPassword() {
    const [ validUrl , setValidUrl ] = useState(false);
    const [password, setPassword] = useState("");
	const [msg, setMsg] = useState("");
	const [error, setError] = useState("");
	const param = useParams();
    const navigate = useNavigate()
	const url = `${import.meta.env.VITE_APP_BACKEND_URL}/api/password-reset/${param.id}`;

    useEffect(() => {
		const verifyUrl = async () => {
			try {
				await axios.get(url);
				setValidUrl(true);
			} catch (error) {
				setValidUrl(false);
			}
		};
		verifyUrl();
	}, [param, url]);

    const onSubmit = (values)=>{
        console.log(values)
        try {
            (async ()=>{
                const data = await addingNewPassword(values.password,param.id)
                setMsg(data.message);
                setError("")
                navigate("/user/login-page")
            })()
        } catch (error) {
            
        }
    }

    const { values , handleChange , handleSubmit } = useFormik({
        initialValues:{
            password : ""
        },
        onSubmit,
    })

    return (
        <>
          <div
            className="container loginPage"
            style={{
              minwidth: "410px",
              maxWidth: "550px",
              marginTop: "8%",
              marginBottom: "5%",
            }}
          >
            <form  onSubmit={handleSubmit} className="border  pb-5  loginPage--form">
              <div className="loginPage--form--img">
                <br />
                <br />
                <h3 className="center mt-2">Add a new Password</h3>
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
                  <i className="fas fa-key"></i>
                </span>
                  </div>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="New password "
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    required
                    aria-label="gmail"
                    aria-describedby="addon-wrapping"
                  />
                </div>
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" for="formExample23"></label>
              </div>

              <button
                type="submit"
                className="btn btn-lg btn-block btn-sm text-light"
                style={{
                  backgroundColor: "rgb(10,149,255)",
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </>
      );
}

export default NewPassword