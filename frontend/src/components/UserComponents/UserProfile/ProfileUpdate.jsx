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
import { updateUserProfile } from '../../../helper/UserProfileHelper'

function ProfileUpdate({ userDetails }) {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const { tokenData } = useSelector((state)=>state.user)

  const initialValue = {
    firstName: userDetails.firstName,
    email: userDetails.email,
    phone: userDetails.phone,
    job: userDetails.job,
    company: userDetails.company,
  };

 
  const [userData, setUsetData] = useState(initialValue);

  var data_id = userDetails._id;
  const getUserDetails = async () => {
    axios.defaults.baseURL = "http://localhost:80";
    await axios.get("/api/getUserDetails/" + data_id).then((datas) => {
      dispatch(setUserDetails(datas));
      setUsetData(datas);
    });
  };
  useEffect(() => {
    getUserDetails();
  }, []);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUsetData({
      ...userDetails,

      [name]: value,
    });
  };

  const id = userDetails._id;

  const updateData = { ...userData, id };
  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.success("Profile updated");

    try {
      axios.defaults.baseURL = "http://localhost:80";
      await updateUserProfile( updateData , tokenData)
     const datas =  await getUserDetails( data_id)
     console.log("datasd ",datas)
          dispatch(setUserDetails(datas.data));
          setUsetData(datas);
          navigate("/home")
    } catch (error) {
      console.log("error from catch error ", error);
    }
  };


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
                value={userData.firstName}
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
                value={userData.email}
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
                value={userData.phone}
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
                value={userData.job}
                onChange={handleChange}
                type="text"
                name="job"
                placeholder="your job"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Company</Form.Label>
              <Form.Control
                value={userData.company}
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
