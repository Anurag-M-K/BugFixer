import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { setUserUpdatedDetails } from "../../../redux/features/userUpdatedSlice";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { setUserDetails } from "../../../redux/features/userSlice";
import { updateUserProfile ,getUserDetails } from '../../../helper/UserProfileHelper'
import {useFormik} from 'formik'

function ProfileUpdate({ userDetails }) {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const { tokenData } = useSelector((state)=>state.user)

  console.log("userdetails fromporigole. ",userDetails)

 
  // const [userData, setUsetData] = useState(initialValue);

 

  // const handleChange = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   setUsetData({
  //     ...userDetails,
  //     job,company,

  //     [name]: value,
  //   });
  // };

  const id = userDetails._id;

  
  // const updateData = { ...userData, id };
  const onSubmit = async (values) => {
    // e.preventDefault();z
    console.log("update teatat ",values)
    try {
      axios.defaults.baseURL = "http://localhost:80";
      await updateUserProfile( values , tokenData)
      const datas =  await getUserDetails( tokenData)
      console.log("=====",datas);
      toast.success("Profile updated");
          dispatch(setUserDetails(datas.response));
          setUsetData(datas);
          navigate("/home")
    } catch (error) {
      console.log("error from catch error ", error);
    }
  };
  const {values,handleSubmit,handleChange}= useFormik({
    initialValues:{
      firstName: userDetails.firstName,
      email: userDetails.email,
      phone: userDetails.phone,
      job: userDetails.job,
      company: userDetails.company,
    },
    onSubmit
  });





  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit profile
      </Button>

      <Modal show={show} onHide={handleClose}>
        <form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                value={values.firstName}
                onChange={handleChange}
                name="firstName"
                type="text"
                placeholder="New Name"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                value={values.email}
                onChange={handleChange}
                type="email"
                name="email"
                placeholder="New Email"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                value={values.phone}
                onChange={handleChange}
                type="number"
                name="phone"
                placeholder="New Phone"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Job</Form.Label>
              <Form.Control
                value={values.job}
                onChange={handleChange}
                type="text"
                id="job"
                placeholder="your job"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Company</Form.Label>
              <Form.Control
                value={values.company}
                onChange={handleChange}
                type="text"
                name="company"
                placeholder="your job"
                autoFocus
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          <button
              className="btn btn-primary"
              type="submit"
              onClick={handleClose}
            >
              Update
            </button>
         
          </Modal.Footer>
        </form>
        <Toaster />
      </Modal>
    </>
  );
}

export default ProfileUpdate;
