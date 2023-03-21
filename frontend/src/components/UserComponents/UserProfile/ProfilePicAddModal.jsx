import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setUserUpdatedDetails } from "../../../redux/features/userUpdatedSlice";
import "./ProfileEdit.css";
import toast, { Toaster } from "react-hot-toast";
import { getUserDetails } from "../../../helper/UserProfileHelper";
import { setUserDetails } from "../../../redux/features/userSlice";
import { hideLoading, showLoading } from "../../../redux/features/alertSlice";

function ProfilePicAddModal() {
  const [show, setShow] = useState(false);
  const [otp, setOtp] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [previewSource, setPreviewSource] = useState();
  const [fileInputState, setFileInpuyState] = useState("");
  const [selectedFle, setSelectedFile] = useState("");
  const [validate, setValidate] = useState("");
  const { userDetails } = useSelector((state) => state.user);
  const { tokenData } = useSelector((state) => state.user)

  //handling fileinput and verifying file type
  const handleFileInput = (e) => {
    const file = e.target.files[0];
    if (file.type !== "image/jpeg" && file.type !== "image/png" && file.type !== "image/jpg"  ) {
      toast.error("Please select valid image");
      return false;
    } else {
      previewFile(file);
    }
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };


  //uploading profile image
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!previewSource) return;

    try {
      await uploadImage(previewSource);
      dispatch(setUserUpdatedDetails());
      toast.success("Profile picture updated");
      setShow(false);
    } catch (error) {
      console.error(error);
    }
  };
  const userId = userDetails?._id;
  const uploadImage = async (base64EncodedImage) => {
    console.log(" ", base64EncodedImage);
    try {
      dispatch(showLoading())
      await fetch(`${import.meta.env.VITE_APP_BACKEND_URL}/api/profile/${userId}`, {
        method: "POST",
        body: JSON.stringify({ data: base64EncodedImage, userId }),
        headers: { "Content-type": "application/json" },
        
      }).then(async(responseData) => {
        dispatch(hideLoading())
        const user = await getUserDetails(tokenData)
        dispatch(setUserDetails(user?.response))
        console.log(JSON.stringify(responseData, null, 4));
       
      });
    } catch (error) {
      console.error(error);
    }
  };

  // geting updated user details fromd database and updaitng redux
  useEffect(()=>{
    try {
      (async()=>{
        const user = await getUserDetails(tokenData)
        dispatch(setUserDetails(user?.response))
      })()
    } catch (error) {
      console.log(error)
    }

  },[])
  return (
    <div className="mainModal">
      <Button variant="primary" className="ml-2 " onClick={handleShow}>
        Add Profile Pic
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        className="modalImg"
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Choose Image</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleFileInput}
            name="image"
            value={fileInputState}
            type="file"
          />
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
}

export default ProfilePicAddModal;
