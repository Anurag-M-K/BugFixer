import { Bookmark, History } from "@mui/icons-material";
import { Avatar, Link } from "@mui/material";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; //quills css important
import "./index.css";
import ReactHtmlParser from "react-html-parser";
import {  useSelector } from "react-redux";
import { userState } from "../../../redux/features/userSlice";


function MainQuestion() {


  const [show, setShow] = useState(false);
  const [answer, setAnswer] = useState(" ");
  const [questionData, setQuestionData] = useState();
  const user = useSelector(userState)
const [comment , setComment] = useState('')

console.log(user,"user coming")


  let search = window.location.search;
  const params = new URLSearchParams(search);
  const id = params.get("q");
  
  const [_id,set_Id] = useState('');
  useEffect(()=>{
    const url = window.location.href;
    const _id = url.match(/[^\=]+$/)[0];
    set_Id(_id);
  },[])
  





  const handleQuill = (value) => {
    setAnswer(value);
  };
useEffect(() => {
    async function getQuestionDetails() {
      await axios
        .get(`/api/question/${_id}`)
        .then((res) => setQuestionData(res.data[0]))
        .catch((err) => console.log(err));
    } 
    getQuestionDetails();
  }, [_id]);


  async function  getUpdatedAnswer(){
    await axios.post(`/api/question/${_id}`)
    .then((res)=>{
      setQuestionData(res.data[0])
    }).catch((err)=>{
      console.log(err);
    })
  }







  const handleSubmit = async()=>{
   if(answer !==""){
    const body = {
      question_id:_id,
      answer :answer,
      user:user
    }
    const config = {
      headers:{
        'Content-type':"application/json"
      }
    }
    await axios.post('/api/answer',body,config).then((res)=>{
      console.log(res.data);
      alert("answer added successfully");
      setAnswer('')
      getUpdatedAnswer();

    }).catch((err)=>{
      console.log(err)
    })
   }
   

  }

  const handleComment = async()=>{
    if(comment != ""){
      const body = {
        question_id : id,
        comment:comment,
        user:user 
      }
      console.log(body,"sfsdsdfasd")

      await axios.post(`/api/comment/${_id}`,body).then((res)=>{
        setComment("")
        setShow(false)
        getUpdatedAnswer()
      })
    }
  }


  return (
    <div className="main col-xl-8">
      <div className="main-container">
        <div className="main-top">
          <h2 className="main-question">{questionData?.title}</h2>
          <Link top="/add-question">
            <button>Ask Question</button>
          </Link>
        </div>
        <div className="main-desc">
          <div className="info">
            <p>{new Date(questionData?.created_at).toLocaleString()}</p>
            <p>
              Active <span>today</span>
            </p>
            <p>
              Viewed <span>43 times</span>
            </p>
          </div>
        </div>
        <div className="all-questions">
          <div className="all-questions-container">
            <div className="all-questions-left">
              <div className="all-options">
                <span className="arrow">
                  <svg
                    aria-hidden="true"
                    className="svg-icon iconArrowUpLg"
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                  >
                    <path d="M2 25h32L18 9 2 25Z"></path>
                  </svg>
                </span>
                <p className="arrow">0</p>
                <span className="arrow">
                  <svg
                    aria-hidden="true"
                    className="svg-icon iconArrowDownLg"
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                  >
                    <path d="M2 11h32L18 27 2 11Z"></path>
                  </svg>
                </span>
                <Bookmark />
                <History />
              </div>
            </div>
            <div className="question-answer">
              <p>{ReactHtmlParser(questionData?.body)}</p>
              <div className="author">
                <small>
                  asked{new Date(questionData?.created_at).toLocaleString()}
                </small>
                <div className="auth-details">
                  <Avatar src={questionData?.user?.photo} />
                  <p>
                    {questionData?.user?.firstName
                      ? questionData?.user?.firstName
                      : String(questionData?.user?.email).split("@")[0]}
                  </p>
                </div>
              </div>
              <div className="comments">
                {
                  questionData?.comments && questionData?.comments?.map((_qd)=><p>
                    {_qd?.comment}- <span>   {_qd?.user?.firstName
                        ? _qd?.user?.firstName
                        : String(_qd?.firstName).split("@")[0]}</span>
                    <small>{new Date(_qd?.created_at).toLocaleString()}</small></p>)
                }
                <div className="comment">
                  
                    <p onClick={() => setShow(!show)}>Add a comment</p>
                    {show && (
                      <div className="title">
                        <textarea 
                        value={comment}
                        onChange={(e)=>setComment(e.target.value)}
                          style={{
                            margin: "5px 0px",
                            padding: "10px",
                            border: "1px solid rgba(0,0,0,0.2)",
                            borderRadius: "3px",
                            outline: "none",
                          }}
                          type="text"
                          placeholder="Add your comment..."
                          rows={5}
                        ></textarea>
                        <button onClick={handleComment}>Add comment</button>
                      </div>
                    )}
                  
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            flexDirection: "column",
          }}
          className="all-questions"
        >
          <p
            style={{
              marginBottom: "20px",
              fontSize: "1.3rem",
              fontWeight: "300",
            }}
          >
            {questionData?.answerDetails?.length} Answers
          </p>
          {questionData?.answerDetails?.map((_q) => (
            <div key={_q?._id} className="all-questions-container">
              <div className="all-questions-left">
                <div className="all-options">
                  <span className="arrow">
                    <svg
                      aria-hidden="true"
                      className="svg-icon iconArrowUpLg"
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                    >
                      <path d="M2 25h32L18 9 2 25Z"></path>
                    </svg>
                  </span>
                  <p className="arrow">0</p>
                  <span className="arrow">
                    <svg
                      aria-hidden="true"
                      className="svg-icon iconArrowDownLg"
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                    >
                      <path d="M2 11h32L18 27 2 11Z"></path>
                    </svg>
                  </span>
                  <Bookmark />
                  <History />
                </div>
              </div>

              <div className="question-answer">
                <p>{ReactHtmlParser(_q?.answer)}</p>
                <div className="author">
                  <small>{new Date(_q?.created_at).toLocaleString()}</small>
                  <div className="auth-details">
                    <Avatar src={_q?.user?.photo} />
                    <p>
                      {" "}
                      {_q?.user?.firstName
                        ? _q?.user?.firstName
                        : String(_q?.user?.email).split("@")[0]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="main-answer">
        <h3
          style={{
            fontSize: "22px",
            margin: "10px 0",
            fontWeight: "400",
          }}
        >
          Your Answer
        </h3>
        <ReactQuill
          value={answer}
          onChange={handleQuill}
          className="react-quill col-md-6 col-sm-8 col-lg-10 col-xl-12"
          theme="snow"
          style={{
            height: "200px",
          }}
        />
      </div>
      <button
        type="submit"
        onClick={handleSubmit}
        style={{
          maxWidth: "fit-content",
          marginTop: "100px",
        }}
      >
        Post Your Answer{" "}
      </button>
    </div>
  );
}

export default MainQuestion;
