import React, { useState, useEffect } from "react";
import "./UserQuestions.scss";
import ReactHtmlParser from "react-html-parser";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const UserQuestions = () => {
  const { questionDetails } = useSelector((state) => state.question);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <>
      {questionDetails?.map((questionData) => {
        return (
          <div key={questionData._id}
            className="userQuestions d-flex border-bottom py-2"
            style={{ fontSize: "12px" }}
          >
            <div className="left text-muted mr-3">
              <p className="">votes: {questionData?.vote.length} </p>
              <br />
              <p className="">Answers:{questionData?.answerDetails.length} </p>
              <br />

              <small>12 views</small>
            </div>
            <div className="right">
              <Link to={`/user/question?id=${questionData?._id}`}>
                <h5 className="que font-weight-normal">
                  {questionData?.title}
                </h5>
              </Link>
              <p>{ReactHtmlParser(truncate(questionData?.body, 300))} </p>

              <>
                <div className="tag-image">
                  <div className="col-md-8">
                    {questionData?.tags[0] ? (
                      <button
                        className="btn btn-sm mr-1"
                        style={{
                          color: "rgb(122, 167, 199)",
                          backgroundColor: "rgb(225, 236, 244)",
                          fontSize: "10px",
                        }}
                      >
                        {questionData?.tags[0]}
                      </button>
                    ) : (
                      ""
                    )}
                    {questionData?.tags[1] ? (
                      <button
                        className="btn btn-sm mr-1"
                        style={{
                          color: "rgb(122, 167, 199)",
                          backgroundColor: "rgb(225, 236, 244)",
                          fontSize: "10px",
                        }}
                      >
                        {questionData?.tags[1]}
                      </button>
                    ) : (
                      ""
                    )}

                    {questionData?.tags[2] ? (
                      <button
                        className="btn btn-sm mr-1"
                        style={{
                          color: "rgb(122, 167, 199)",
                          backgroundColor: "rgb(225, 236, 244)",
                          fontSize: "10px",
                        }}
                      >
                        {questionData?.tags[2]}
                      </button>
                    ) : (
                      ""
                    )}

                    {questionData?.tags[3] ? (
                      <button
                        className="btn btn-sm mr-1"
                        style={{
                          color: "rgb(122, 167, 199)",
                          backgroundColor: "rgb(225, 236, 244)",
                          fontSize: "10px",
                        }}
                      >
                        {questionData?.tags[3]}
                      </button>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="col-md-4">
                    <div className="profile float-right ">
                      <div className="d-flex mr-3">
                        <div>
                        <img
                          src={
                            questionData?.user?.imageUrl
                              ? questionData?.user?.imageUrl
                              : "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                          }
                          alt="User"
                          className="mr-2"
                          width="35px"
                          height="35px"
                          style={{ borderRadius: "1rem" }}
                        />  
                        </div>
                        <div>
                        <p>
                        {questionData?.user?.firstName +
                          " " +
                          questionData?.user?.lastName +
                          " "}
                      </p>

                        </div>
                       
                      
                      </div>
                       <div>

                        <small>{" " + questionData?.created_at}</small>
                       </div>
                    </div>
                  </div>
                </div>
              </>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default UserQuestions;
