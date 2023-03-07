import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import ProfilePicAddModal from "./ProfilePicAddModal";
import ProfileUpdate from "./ProfileUpdate";
import { setUserDetails } from "../../../redux/features/userSlice";
import ReactHtmlParser from "react-html-parser";
import {
  deleteQuestion,
  getUserQuestions,
  getUserDetails,
  getAnswers,
} from "../../../helper/UserProfileHelper";
import { setUserProfileQuestionsDetails } from "../../../redux/features/userProfileQuestions";
import toast, { Toaster } from "react-hot-toast";
import { FaTrashAlt } from "react-icons/fa";
import "./UserProfile.css";
import "./ProfileEdit.css";
import { Link } from "react-router-dom";
import { setSingleQuestionDetails } from "../../../redux/features/singleQuestionSlice";
import { SlBadge } from "react-icons/sl";

export default function UserProfile() {
  const { userDetails } = useSelector((state) => state.user);
  const [previewSource, setPreviewSource] = useState();
  const [fileInputState, setFileInpuyState] = useState("");
  const [selectedFle, setSelectedFile] = useState("");
  const [response, setResponse] = useState([]);
  const { questionDetails } = useSelector((state) => state.question);
  const dispatch = useDispatch();
  const { tokenData } = useSelector((state) => state.user);
  const { userProfileQuestionsDetails } = useSelector(
    (state) => state.userProfileQuestions
  );
    const { singleQuestiondata } = useSelector((state)=>state.singleQuestion)


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

  const id = userDetails?._id;

  const userId = id;
  useEffect(() => {
    try {
      (async () => {
        const data = await getUserQuestions(tokenData);
        dispatch(setUserProfileQuestionsDetails(data.data.questions));
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);

  //deleting questions and geting questions and updates redux
  const handleQuestionDelete = async (id) => {
    try {
      const deleteQuestionRsponse = await deleteQuestion(id, tokenData);
      toast.success(deleteQuestionRsponse.message);
      const data = await getUserQuestions(tokenData);
      dispatch(setUserProfileQuestionsDetails(data.data.questions));
    } catch (error) {
      toast.error("server error");
    }
  };

  //geting user details and updating redux
  useEffect(() => {
    try {
      (async () => {
        const user = await getUserDetails(tokenData);
        dispatch(setUserDetails(user?.response));
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);

//get answers
  useEffect(()=>{
    (async ()=>{
      const answers = await getAnswers(userProfileQuestionsDetails[0]?._id)
      dispatch(setSingleQuestionDetails(answers));
    })()
  },[])

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
                  src={
                    userDetails.imageUrl ? userDetails?.imageUrl : defaultUrl
                  }
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: "130px", height: "130px" }}
                  fluid
                /> 
                <p className="text-muted mt-2 mb-1">{userDetails?.job}</p>
                <p className="text-muted mb-4">{userDetails?.company}</p>
                <div className="pro-reputation">
<div>
  <h3><SlBadge/></h3>
  </div>
<h5 style={{    marginTop: "-16px"}} className="mb-3">{userDetails?.reputation}</h5>
                  </div>  
                
                  
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
                      {userDetails?.firstName
                        ? userDetails?.firstName + " "
                        : ""}
                      {userDetails?.lastName ? userDetails?.lastName : ""} 
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
                <MDBCard className="mb-4 mb-md-0">
                {userProfileQuestionsDetails?.map((question) => {
                  return (
                      <MDBCardBody key={question._id}>
                        <>
                          <MDBCardText
                            
                            className="mb-1"
                            style={{
                              fontSize: "1rem",
                              fontWeight: "bold",
                              width: "100%",
                            }}
                          >
                            <Link to={`/question?id=${question?._id}`}>
                              {question.title ? question?.title : ""}
                            </Link>
                            <div className="del-btn">
                              <div class=" d-md-flex justify-content-md-end  ">
                              
                                <FaTrashAlt
                                  style={{ cursor: "pointer" }}
                                  onClick={() =>
                                    handleQuestionDelete(question._id)
                                  }
                                />
                              </div>
                            </div>
                          </MDBCardText>
                          <MDBCardText
                            key={question._id}
                            className="mb-1"
                            style={{ fontSize: ".77rem" }}
                          >
                            {" "}
                            {ReactHtmlParser(question?.body)}
                          </MDBCardText>
                        </>
                      </MDBCardBody>
                    );
                    })}
                {singleQuestiondata?.data?.map((answers)=>{
                <h4 className="ms-3">Answers</h4>
                
                  return (

                    <p className="ms-3">{ReactHtmlParser(answers?.answer)}</p>
                    
                    )
                })}
                    </MDBCard>
                
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Toaster />
    </section>
  );
}
