import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setUserUpdatedDetails } from '../../../redux/features/userUpdatedSlice';
import './ProfileEdit.css'
import toast,{Toaster} from 'react-hot-toast';

function ProfilePicAddModal() {
    const [show, setShow] = useState(false);
  const [otp , setOtp] = useState("")
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch()

 const navigate = useNavigate()
  const [previewSource, setPreviewSource] = useState();
  const [fileInputState, setFileInpuyState] = useState("");
  const [selectedFle, setSelectedFile] = useState("");
  const [validate , setValidate] = useState("")
const {userDetails}  = useSelector((state) => state.user)
console.log("modal ",userDetails);

  const handleFileInput = (e) => {
    const file = e.target.files[0];
  
    previewFile(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleSubmit = (e) => {
    toast.success("profile pic updated")
    e.preventDefault();
    dispatch(setUserUpdatedDetails())

    if (!previewSource) return;
    uploadImage(previewSource);
  };
const userId = userDetails?._id
console.log(userId);
const uploadImage = async (base64EncodedImage) => {
    console.log(" ",base64EncodedImage);
    try {
      await fetch(`http://localhost:80/api/profile/${userId}`, {
        method: "POST",
        body: JSON.stringify({ data: base64EncodedImage,userId}),
        headers: { "Content-type": "application/json" },
      }).then((responseData) => {
        console.log(JSON.stringify(responseData, null, 4));
      });
    } catch (error) {
      console.error(error);
    }
  };

 
  return (
    <div className='mainModal'>
    <Button variant="primary" className='ml-2 ' onClick={handleShow}>
     Add Profile Pic
    </Button>

    <Modal show={show} onHide={handleClose} className='modalImg' animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <form onSubmit={handleSubmit} >
      <input  onChange={handleFileInput} name="image" 

                      value={fileInputState}  type="file" />
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
       <button  onClick={()=>navigate('/profile')}  type="submit" className='btn btn-primary' >
          Save Changes
        </button>
      </Modal.Footer>   
      </form>

  
      
     
    </Modal>
  </div>  )
}

export default ProfilePicAddModal