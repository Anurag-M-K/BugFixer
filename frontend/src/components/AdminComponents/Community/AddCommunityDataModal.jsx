import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useFormik } from 'formik';
import { addCommunityPosts } from '../../../helper/adminCommunityHelper';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import toast , {Toaster} from "react-hot-toast";
import './CommunityManage.css';

function AddCommunityDataModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const { adminToken } = useSelector((state)=>state.adminToken)

const navigate = useNavigate()

  const onSubmit = (values)=>{
    console.log(values)
      try {
        (async ()=>{
          const data = await addCommunityPosts(values,adminToken)
          toast.success("Post added successfully")
         
        })()
      } catch (error) {
        console.log(error)
      }
      
    }

  const {values,handleChange,handleSubmit} = useFormik({
    initialValues:{
      title:"",
      body:"",
    },
    onSubmit
  })


  return (
    <>
    <div className='community-modal'>

      <Button variant="warning ms-1" onClick={handleShow}>
        Add
      </Button>

      <Modal show={show} onHide={handleClose}>
        <form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Add Programming languages</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Language</Form.Label>
              <Form.Control
                type="text"
                placeholder="add language"
                autoFocus
                name="title"
                value={values.title}
                onChange={handleChange}
                autocomplete="off"
                />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Captions</Form.Label>
              <Form.Control as="textarea" rows={3}
              name="body"
              value={values.body}
              onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type='submit' variant="primary" onClick={handleClose} >
            Save
          </Button>
        </Modal.Footer>
        </form>
      </Modal>
      <Toaster/>
                </div>
    </>
  );
}

export default AddCommunityDataModal;