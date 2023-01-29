import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function ProfileUpdate({ userDetails }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const initialValue = {
    firstName: userDetails.firstName,
    email: userDetails.email,
    phone: userDetails.phone,
    job: "",
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
  console.log(id);

console.log(userData);

const handleSubmit =async (e)=>{
e.preventDefault();
console.log("submit ");
try {
  const url = `http://localhost:80/api/update-user/${id}`;
  const {userData : res} = await axios.post(url,userData);

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
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit} >
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
                type="email"
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
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProfileUpdate;
