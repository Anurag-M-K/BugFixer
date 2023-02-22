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

  console.log("question dat afrom ui ",questionDetails)
  return (
    <>
      {questionDetails.map((questionData) => {
        return (
          <div
            className="userQuestions d-flex border-bottom py-2"
            style={{ fontSize: "12px" }}
          >
            <div className="left text-muted mr-3">
              <p className="">votes:{questionData?.vote} </p>
              <br />
              <p className="">Answers:{questionData?.answerDetails.length} </p>
              <br />

              <small>1212 views</small>
            </div>
            <div className="right">
              <Link to={`/question?id=${questionData?._id}`}>
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

const data = [
  {
    view: 111,
    question: ` Excel search multiples rows containing substring`,
    ans: `I have an Excel file with 2 sheets : The first one got a list of
        keywords in a column. The second one got sentences on a column along
        with an id on another column. Thus the 2 sheets look like this : ...`,
    hashtag1: "excel",
    hashtag2: "Search",
    hashtag3: "excel-formula",
    time: " 1 min",
    img: "../Images/user6.png",
    user: "Dolly singh",
    score: 111,
    badge: "9",
    gold: "234",
  },
  {
    view: 31,
    question: `java method reference as Supplier`,
    ans: `Currently, this is my code: private Supplier<BundleEntryResponseComponent> buildSupplier( final RequestDetails requestDetails, final Resource resource ) { return () -> this....`,
    hashtag1: "Java",
    hashtag2: "Java-11",
    hashtag3: "php",
    time: " 2 min",
    img: "../Images/user2.png",
    user: "Jordi",
    score: "16.7K",
    badge: "239",
  },
  {
    view: 41,
    question: `How do i resolve "Cannot read properties of undefined (reading 'ownerDocument')"`,
    ans: `I am trying to add a div inside the main div on page loading, it works when i write the code like this: function DivAdder() { $('#mainDiv').append('<div class="newspaper-wrapper"><...`,
    hashtag1: "javascript",
    hashtag2: "javascript",
    hashtag3: "dom",
    hashtag4: "jquery",
    time: " 1 min",
    img: "../Images/user6.png",
    user: "Dolly singh",
    score: 111,
    badge: "9",
  },
  {
    view: 351,
    question: ` Excel search multiples rows containing substring`,
    ans: `I have an Excel file with 2 sheets : The first one got a list of
        keywords in a column. The second one got sentences on a column along
        with an id on another column. Thus the 2 sheets look like this : ...`,
    hashtag1: "excel",
    hashtag2: "Search",
    hashtag3: "excel-formula",
    time: " 1 min",
    img: "../Images/user3.png",
    user: "Dolly singh",
    score: 111,
    gold: "34",
    badge: "9",
  },
  {
    view: 54,
    question: `getInitialProps cant be accessed`,
    ans: `I am having trouble accessing 'initialReduxState' when setting the hook with 'setReduxStore' in getinitialProps and cant seem to figure out why. Below is a snippet of the code. export default (App)...`,
    hashtag1: "javascript",
    hashtag2: "function",
    hashtag3: "sql",
    time: " 43 min",
    img: "../Images/user4.png",
    user: "redibis",
    score: 141,
    badge: "2",
  },
  {
    view: 111,
    question: `How to access router in different viewModel in Oracle OJET`,
    ans: `When we create the scaffolded application in ojet using ojet create <project name> --template=navdrawer|navbar|basic|blank it produces appController.js which has the following code for routing ...`,
    hashtag1: "oracle",
    hashtag2: "oracle-jet",
    time: " 45 min",
    img: "../Images/user1.png",
    user: "anupamD",
    score: 660,
    badge: "16",
  },
  {
    view: 111,
    question: `How to get a void** to be a parameter of a C library?`,
    ans: `I'm trying to call a C library from GO using cgo. The C library has the following function: int receive(void** data); // I'd call it like that: void* myptr; int ret = receive(&myptr); // And ...`,
    hashtag1: "c",
    hashtag2: "C language",
    hashtag3: "c++",
    time: " 15 min",
    img: "../Images/user5.png",
    user: "Alexis",
    score: "16,671",
    badge: "165",
    gold: "34",
  },
  {
    view: 451,
    question: `Hope you have a pleasant holiday! I have a small problem with the code below which does not generate an auto-increment identifier and is asking for your help. Can you help me please ? <span class=&...`,
    hashtag1: "JavaScript",
    hashtag2: "Php",
    time: " 1 min",
    img: "../Images/user3.png",
    user: "Ahmad Jaber",
    score: 34,
    badge: "5",
  },
  {
    view: 111,
    question: `How to access router in different viewModel in Oracle OJET`,
    ans: `When we create the scaffolded application in ojet using ojet create <project name> --template=navdrawer|navbar|basic|blank it produces appController.js which has the following code for routing ...`,
    hashtag1: "oracle",
    hashtag2: "oracle-jet",
    time: " 45 min",
    img: "../Images/user1.png",
    user: "anupamD",
    score: 660,
    badge: "16",
  },
  {
    view: 111,
    question: `How to get a void** to be a parameter of a C library?`,
    ans: `I'm trying to call a C library from GO using cgo. The C library has the following function: int receive(void** data); // I'd call it like that: void* myptr; int ret = receive(&myptr); // And ...`,
    hashtag1: "c",
    hashtag2: "C language",
    hashtag3: "c++",
    time: " 15 min",
    img: "../Images/user5.png",
    user: "Alexis",
    score: "16,671",
    badge: "165",
    gold: "34",
  },
  {
    view: 54,
    question: `getInitialProps cant be accessed`,
    ans: `I am having trouble accessing 'initialReduxState' when setting the hook with 'setReduxStore' in getinitialProps and cant seem to figure out why. Below is a snippet of the code. export default (App)...`,
    hashtag1: "javascript",
    hashtag2: "function",
    hashtag3: "sql",
    time: " 43 min",
    img: "../Images/user4.png",
    user: "redibis",
    score: 141,
    badge: "2",
  },
];
