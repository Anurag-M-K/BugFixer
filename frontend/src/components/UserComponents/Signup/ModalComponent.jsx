import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ModalComponent({data}) {
  const [show, setShow] = useState(false);
  const [otp , setOtp] = useState("")
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const [error,setError] = useState('')
  const handleChange = ({currentTarget:input})=>{
    setData({...data,[input.name]:input.value});
  }   
  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
      const url = 'http://localhost:80/api/userSignup';
      const {data:res}= await axios.post(url,data).then((res)=>{
        console.log("res ",res);
      })
      navigate('/login-page')
    } catch (error) {
      if(error.response && error.response.status >= 400 && 
        error.response.status <= 500
        ){
          setError(error.response.data.message)
          console.log('error ',error)
        }
    }
  }
  const handleOtp = (event)=>{
    setOtp(event.target.value)
  }

  
  const onClick = async()=>{
   await axios.post(`http://localhost:80/otp`,{otp}).then((res)=>{
    navigate('/login-page')
    })
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
        <input value={otp} onChange={handleOtp} type="number" />
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="button" onClick={onClick} variant="primary"  >
            Save Changes
          </Button>
        </Modal.Footer>   
        </form>
    
        
       
      </Modal>
    </>
  );
}

export default ModalComponent;