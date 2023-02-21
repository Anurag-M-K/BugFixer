import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import ProfilePicAddModal from "./ProfilePicAddModal";
import ProfileUpdate from "./ProfileUpdate";
import { setUserDetails } from "../../../redux/features/userSlice";
import ReactHtmlParser from "react-html-parser";
import { deleteQuestion ,getUserQuestions,getUserDetails } from "../../../helper/UserProfileHelper";
import { setUserProfileQuestionsDetails } from "../../../redux/features/userProfileQuestions";
import toast, { Toaster } from "react-hot-toast";
import './UserProfile.css'
import "./ProfileEdit.css";

export default function UserProfile() {
  const { userDetails } = useSelector((state) => state.user);
  const [previewSource, setPreviewSource] = useState();
  const [fileInputState, setFileInpuyState] = useState("");
  const [selectedFle, setSelectedFile] = useState("");
  const [response, setResponse] = useState([]);
  const { questionDetails } = useSelector((state) => state.question);
  const dispatch = useDispatch();
  const { tokenData } = useSelector((state) => state.user);
  const { userProfileQuestionsDetails } = useSelector((state=> state.userProfileQuestions))
  
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
    e.preventDefault();
    if (!previewSource) return;
    uploadImage(previewSource);
  };
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
console.log("userd details from profile ",userDetails)
  const email = userDetails.email;
  useEffect(() => {
    (async () => {
      const data = await axios({
        url: "/api/getImage/" + email,
        method: "GET",
        headers: {
          Authorization: tokenData,
        },
      }).then((response) => {
        setResponse(response.data[0]);
        dispatch(setUserDetails(response.data[0]));
      });
    })();
  }, []);






  const id = userDetails?._id;
    
  const userId = id
  useEffect(()=>{
    try {
      (async ()=>{
        const data = await getUserQuestions(userId , tokenData)
        dispatch(setUserProfileQuestionsDetails(data.data.questions))
      })()
    } catch (error) {
    console.log(error)      
    }
  },[])



  
  const handleQuestionDelete = async (id) => {
    const deleteQuestioneRsponse = await deleteQuestion(id, tokenData);
    const data = await getUserQuestions(userId , tokenData)
        dispatch(setUserProfileQuestionsDetails(data.data.questions))
    toast.success(deleteQuestioneRsponse.message);
  };

  useEffect(()=>{
    try {
      (async()=>{
        const user = await getUserDetails(userDetails._id,tokenData)
        console.log("usr ",user.response)
        dispatch(setUserDetails(user?.response))
      })()
    } catch (error) {
      console.log(error)
    }

  },[])

  const userAskedQuestions = userProfileQuestionsDetails.filter(useraskedQuestions=> useraskedQuestions?.user?._id ==id)
  let defaultUrl =
  "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp";
  return (
    <section style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <img
                  src={response.imageUrl ? response?.imageUrl : defaultUrl}
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: "130px", height: "130px" }}
                  fluid
                />
                <p className="text-muted mt-2 mb-1">{userDetails?.job}</p>
                <p className="text-muted mb-4">{userDetails?.company}</p>
                <div className="d-flex justify-content-center mb-2">
                  <ProfileUpdate
                    userDetails={userDetails}
                    response={response}
                  />{" "}
                  <ProfilePicAddModal />
                </div>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody className="p-0">
                <MDBListGroup flush className="rounded-3">
                  <MDBListGroupItem className=" d-flex  align-items-center justify-content-center p-3">
                    <MDBIcon />
                    <MDBCardText>
                      <h5>Social medias</h5>
                    </MDBCardText>

                    <button
                      className="btn btn-warning mb-3 ml-5  "
                      type="submit"
                    >
                      add
                    </button>
                  </MDBListGroupItem>
                  ``
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fas icon="globe fa-lg text-warning" />
                    <MDBCardText>https://mdbootstrap.com</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon
                      fab
                      icon="github fa-lg"
                      style={{ color: "#333333" }}
                    />
                    <MDBCardText>mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon
                      fab
                      icon="twitter fa-lg"
                      style={{ color: "#55acee" }}
                    />
                    <MDBCardText>@mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon
                      fab
                      icon="instagram fa-lg"
                      style={{ color: "#ac2bac" }}
                    />
                    <MDBCardText>mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon
                      fab
                      icon="facebook fa-lg"
                      style={{ color: "#3b5998" }}
                    />
                    <MDBCardText>mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {userDetails?.firstName ? userDetails?.firstName + " " : ""}
                      {userDetails?.lastName ? userDetails?.lastName : "" }
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {userDetails?.email ? userDetails?.email : ""}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {userDetails?.phone ? userDetails?.phone : ""}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />

                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Job</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {userDetails?.job ? userDetails?.job : ""}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Company</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {userDetails?.company ? userDetails?.company : ""}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

            <MDBRow>
              <MDBCol md="6 col-md-12">
                {userAskedQuestions?.map((question) => {
                <MDBCardText className="mb-4">
                  <span className="text-primary  font-italic me-1">
                    
                    Questions
                  </span>{" "}
                    
                

                </MDBCardText>
                  return (
                    <MDBCard className="mb-4 mb-md-0">
                      <MDBCardBody>
                        <>
                          <MDBCardText
                            key={question._id}
                            className="mb-1"
                            style={{
                              fontSize: "1rem",
                              fontWeight: "bold",
                              width: "100%",
                            }}
                          >
                            {question.title ? question?.title : ""} 
                            <div className="del-btn">
                            <div class=" d-md-flex justify-content-md-end  ">
                              <a
                                class="btn btn-danger btn-md active"
                                role="button"
                                aria-pressed="true"
                                onClick={() =>
                                  handleQuestionDelete(question._id)
                                }
                              >
                                Delete
                              </a>
                            </div>
                            </div>
                          </MDBCardText>
                          <MDBCardText
                            key={question._id}
                            className="mb-1"
                            style={{ fontSize: ".77rem" }}
                          >
                            {" "}

                            {ReactHtmlParser(question?.body )}
                          </MDBCardText>
                        </>
                      </MDBCardBody>
                    </MDBCard>
                );
            
              })}
              </MDBCol>
            </MDBRow>
          </MDBCol>
          </MDBRow>
          </MDBContainer>
          <Toaster />
          </section>
  );
}
