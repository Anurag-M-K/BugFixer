import {
  Bookmark,
  CloseOutlined,
  ConstructionOutlined,
  History,
  Try,
} from "@mui/icons-material";
import { Avatar, Link } from "@mui/material";
import axios from "../../../config/axiosInstance";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; //quills css important
import ReactHtmlParser from "react-html-parser";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { setSingleQuestionDetails } from "../../../redux/features/singleQuestionSlice";
import { useLocation } from "react-router-dom";
import ReportReason from "./ReportReason";
import { setCommentDetails } from "../../../redux/features/commentSlice";
import "./index.css";
import {
  questionDecVoting,
  questionVoting,
} from "../../../helper/userQuestionHelper";
import { setParticularAnswerDetails } from "../../../redux/features/particularAnswersSlice";

function MainQuestion() {
  const [show, setShow] = useState(false);
  const [answer, setAnswer] = useState([]);
  const [questionData, setQuestionData] = useState([]);
  const { userDetails } = useSelector((state) => state.user);
  const [comment, setComment] = useState("");
  var [vote, setVote] = useState(0);
  var [answerVote, setAnswerVote] = useState([]);
  const dispatch = useDispatch();
  const { tokenData } = useSelector((state) => state.user);
  const [voteResponse, setVoteResponse] = useState("");
  const [voteRes, setVoteRes] = useState("");
  const { singleQuestiondata } = useSelector((state) => state.singleQuestion);
  const { particularAnswersDetails } = useSelector(
    (state) => state.particularAnswers
  );

  console.log("particular answer a", particularAnswersDetails);

  let location = useLocation();
  let params = new URLSearchParams(location.search);
  let id = params.get("id");

  const handleQuill = (value) => {
    setAnswer(value);
  };

  useEffect(() => {
    (async () => {
      try {
        await axios.get(`/api/question/${id}`).then(async (res) => {
          const comment = await axios.get(`/api/comment/${id}`);
          dispatch(setCommentDetails(comment.data));
          setQuestionData(res.data[0]);
          setAnswerVote(res.data[0].answerDetails);
          dispatch(setParticularAnswerDetails(res.data[0].answerDetails));
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const _id = questionData._id;

  async function getUpdatedAnswer() {
    await axios
      .post(`/api/question/${_id}`)
      .then((res) => {
        setQuestionData(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //answer adding and geting
  const handleSubmit = async () => {
    if (answer !== "") {
      const body = {
        question_id: _id,
        answer: answer,
        user: userDetails,
      };
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      await axios
        .post("/api/answer", body, config)
        .then(async (res) => {
          const id = res.data.data.question_id;
          await axios.get("/api/get-answer/" + id).then((response) => {
            console.log(" ansdwer response geting ", response);
            console.log("response of anser hgeting  ", response.data);
            dispatch(setParticularAnswerDetails(response.data));

            dispatch(setSingleQuestionDetails(response));
          });
          toast.success("Answer added successfully");

          setAnswer("");
          getUpdatedAnswer();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const qid = questionData?._id;

  const handleComment = async () => {
    if (comment != "") {
      const body = {
        question_id: id,
        comment: comment,
        user: userDetails,
      };
      await axios.post(`/api/comment/${qid}`, body).then(async (res) => {
        const comment = await axios.get(`/api/comment/${qid}`);
        dispatch(setCommentDetails(comment.data));
        setComment("");
        setShow(false);
        getUpdatedAnswer();
        toast.success("Comment added successfully");
      });
    }
  };

  const { commentDetails } = useSelector((state) => state.comment);

  ///quesiton upvoting and downvoting
  async function incVoting(question_id) {
    try {
      const data = await questionVoting(question_id, tokenData);
      const getSingleQuestion = await axios.get(`/api/question/${id}`);
      dispatch(setSingleQuestionDetails(getSingleQuestion.data));
      setVoteRes(getSingleQuestion.data);
      toast.error(data.data.message);
    } catch (error) {
      console.log(error);
    }
  }

  async function decVoting(question_id) {
    try {
      const data = await questionDecVoting(question_id, tokenData);
      const getSingleQuestion = await axios.get(`/api/question/${id}`);
      dispatch(setSingleQuestionDetails(getSingleQuestion.data));
      setVoteRes(getSingleQuestion.data);

      toast.error(data.data.message);
    } catch (error) {
      console.log(error);
    }
  }

  const questionDetail = { ...questionData, vote };

  const { voteCount } = useSelector((state) => state.vote);

  // var answerVoting = async (id) => {
  //   console.log(id)
  //   try {
  //     setAnswerVote(answerVote + 1);
  //     answerVote++;
  //     await axios.put("/api/answer-voting/"+id,  { answerVote:answerVote });
  //     var qid = questionData._id
  //     await axios
  //     .get(`/api/answer/${qid}`)
  //     .then((res) => {
  //       dispatch(setParticularAnswerDetails(res.data.response))
  //       setAnswerVote(res.data.response);

  //     })
  //     .catch((err) => console.log(err));
  //   } catch (error) {
  //     console.log("error ", error);
  //   }
  // };

  return (
    <div className="main col-xl-12">
      <div className="main-container">
        <div className="main-top">
          <h2 className="main-question">{questionData?.title}</h2>
        </div>
        <div className="main-desc">
          <div className="info">
            <p>
              Active <span>today</span>
            </p>
            <p>{new Date(questionData?.created_at).toLocaleString()}</p>
            <p>
              Viewed <span>43 times</span>
            </p>
          </div>
        </div>
        <div className="all-questions">
          <div className="all-questions-container">
            <div className="all-questions-left ">
              <div
                className="all-options"
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div className="col-md-12 side">
                  <div className="upArrow">
                    <span className="arrow">
                      <svg
                        type="submit"
                        onClick={() => incVoting(questionData?._id)}
                        aria-hidden="true"
                        className="svg-icon iconArrowUpLg"
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                      >
                        <path d="M2 25h32L18 9 2 25Z"></path>
                      </svg>
                    </span>
                  </div>
                  <div className="vote">
                    <p className="arrow pe-2">
                      {singleQuestiondata[0]?.vote.length
                        ? singleQuestiondata[0]?.vote.length
                        : "0"}
                    </p>
                  </div>
                  <div className="downArrow">
                    <span className="arrow">
                      <svg
                        type="submit"
                        onClick={() => decVoting(questionData?._id)}
                        aria-hidden="true"
                        className="svg-icon iconArrowDownLg"
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                      >
                        <path d="M2 11h32L18 27 2 11Z"></path>
                      </svg>
                    </span>
                  </div>
                  <div className="report">
                    <small>
                      <ReportReason questionData={questionData} />
                    </small>
                  </div>
                  <div className="bookmark">
                    <Bookmark />
                  </div>
                  <div className="history">
                    <History />
                  </div>
                </div>
              </div>
              <div className="col-md-10">
                <div className="question-answer">
                  <p>{ReactHtmlParser(questionData?.body)}</p>
                  <div className="author">
                    <small>
                      asked{new Date(questionData?.created_at).toLocaleString()}
                    </small>
                    <div className="auth-details">
                      <Avatar src={questionData?.user?.imageUrl} />
                      <p>
                        {questionData?.user?.firstName
                          ? questionData?.user?.firstName
                          : String(questionData?.user?.email).split("@")[0]}
                      </p>
                    </div>
                  </div>
                  <div className="comments">
                    {commentDetails &&
                      commentDetails?.map((_qd) => (
                        <p>
                          {_qd?.comment}-{" "}
                          <span>
                            {" "}
                            {_qd?.user?.firstName
                              ? _qd?.user?.firstName
                              : String(_qd?.firstName).split("@")[0]}
                          </span>{" "}
                          {_qd?.user?.lastName ? _qd?.user?.lastName : ""}
                          <small>
                            {new Date(_qd?.created_at).toLocaleString()}
                          </small>
                        </p>
                      ))}
                    <div className="comment">
                      <p onClick={() => setShow(!show)}>Add a comment</p>
                      {show && (
                        <div className="title">
                          <textarea
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
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
                          <button
                            className="btn btn-primary"
                            onClick={handleComment}
                          >
                            Add comment
                          </button>
                        </div>
                      )}
                    </div>
                    <br />
                  </div>
                </div>
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
            {particularAnswersDetails?.length} Answers
          </p>
          {particularAnswersDetails?.map((_q) => (
            <div key={_q?._id} className="all-questions-container">
              <div className="all-questions-left col-md-2">
                <div className="all-options">
                  <span
                    // onClick={() => answerVoting(_q._id)}
                    className="arrow"
                  >
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

                  {/* <p className="arrow">{_q?.vote ? _q.vote : "0"}</p> */}
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

              <div
                className="question-answer col-md-10 col-sm-6 "
                style={{
                  display: "flex",
                  justifyContent: " space-evenly",
                }}
              >
                <p>{ReactHtmlParser(_q?.answer)}</p>
              </div>
              <div className="author-answer">
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
        className="btn btn-primary"
        type="submit"
        onClick={handleSubmit}
        style={{
          maxWidth: "fit-content",
          marginTop: "100px",
        }}
      >
        Post Your Answer
      </button>
      {/* <Toaster /> */}
    </div>
  );
}

export default MainQuestion;
