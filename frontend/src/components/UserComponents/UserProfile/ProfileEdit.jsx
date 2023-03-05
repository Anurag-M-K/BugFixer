import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import "./ProfileEdit.css";

function ProfileEdit() {
  const { userDetails } = useSelector((state) => state.user);

  const [userData, setUserData] = useState({
    firstName: "",
    phone: "",
    email: "",
    password: "",
  });

  const [previewSource, setPreviewSource] = useState();
  const [fileInputState, setFileInpuyState] = useState("");
  const [selectedFle, setSelectedFile] = useState("");

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

  const handleChange = (event) => {
    setUserData({
      ...setUserData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!previewSource) return;
    uploadImage(previewSource);
  };

  const userId = userDetails._id;
  const uploadImage = async (base64EncodedImage) => {
    try {
      await fetch(`http://localhost:80/api/profile/${userId}`, {
        method: "POST",
        body: JSON.stringify({ data: base64EncodedImage, userData, userId }),
        headers: { "Content-type": "application/json" },
      }).then((responseData) => {
        console.log(JSON.stringify(responseData, null, 4));
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              {previewSource && (
                <img
                  className="rounded-circle mt-2 mb-2"
                  width="150px"
                  src={previewSource}
                />
              )}
              <span className="font-weight-bold">Edogaru</span>
              <span className="text-black-50">edogaru@mail.com.my</span>
              <span> </span>
            </div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <form onSubmit={handleSubmit} className="form">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="text-right">Edit Profile</h4>
                </div>
                <div className="row mt-2">
                  <div className="col-md-12">
                    <label class="labels">Name</label>
                    <input
                      value={userData.firstName}
                      onChange={handleChange}
                      type="text"
                      class="form-control"
                      placeholder="first name"
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12">
                    <label className="labels">Mobile Number</label>
                    <input
                      value={userData.phone}
                      onChange={handleChange}
                      type="number"
                      className="form-control"
                      placeholder="enter phone number"
                    />
                  </div>

                  <div className="col-md-12">
                    <label className="labels">Email ID</label>
                    <input
                      type="email"
                      value={userData.email}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="enter email id"
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Profile Pic</label>
                    <input
                      type="file"
                      name="image"
                      onChange={handleFileInput}
                      value={fileInputState}
                      className="form-input"
                      placeholder="profile pic"
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <label className="labels">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      // placeholder="country"
                      value={userData.password}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mt-5 text-center">
                  <button
                    className="btn btn-primary profile-button"
                    type="submit"
                  >
                    Save Profile
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center experience">
                <span>Edit Experience</span>
                <span className="border px-3 p-1 add-experience">
                  <i className="fa fa-plus"></i>&nbsp;Experience
                </span>
              </div>
              <br />
              <div className="col-md-12">
                <label class="labels">Experience in Designing</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="experience"
                  value=""
                />
              </div>{" "}
              <br />
              <div className="col-md-12">
                <label class="labels">Additional Details</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="additional details"
                  value=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileEdit;
