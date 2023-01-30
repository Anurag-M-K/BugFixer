import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { setUserUpdatedDetails } from "../../../redux/features/userUpdatedSlice";

function ProfileUpdate({ userDetails }) {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch()
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const initialValue = {
    firstName: userDetails.firstName,
    email: userDetails.email,
    phone: userDetails.phone,
    job: "",
    company:""
  };
  const [userData, setUsetData] = useState(initialValue);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUsetData({
      ...userData,
      [name]: value,
    });
  };

  const id = userDetails._id;

const updateData = {...userData,id}
const handleSubmit =async (e)=>{
e.preventDefault();
try {
  dispatch(setUserUpdatedDetails(updateData))
  axios.defaults.baseURL = "http://localhost:80"
 await axios.put('/api/update-user/',updateData);
 console.log("here");

} catch (error) {
  console.log("error from catch error ",error)
}
}




  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit profile
      </Button>

      <Modal show={show} onHide={handleClose}>
          <form onSubmit={handleSubmit} >
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
          <button className="btn btn-primary" type="submit"> Update</button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}

        </Modal.Footer>
          </form>
      </Modal>

    </>
  );
}

export default ProfileUpdate;
