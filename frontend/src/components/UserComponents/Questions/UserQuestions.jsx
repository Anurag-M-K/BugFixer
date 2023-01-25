import React ,{useState,useEffect} from "react";
import "./UserQuestions.scss";
import { Link } from "react-router-dom";

const UserQuestions = ({questions}) => {




  console.log("here ",questions)

  return (
    <>
    
      {questions.map((questionData)=>{
      
        return  <div className="userQuestions d-flex border-bottom py-2" style={{ fontSize: "12px" }}>
        <div className="left text-muted mr-3">
          <p className="">
            0<br />
            <span>votes</span>
          </p>
          <p className="">
            0<br />
            <span>answers</span>
          </p>
          <small>1212 views</small>
        </div>
        <div className="right">
          <Link to={`/question?id=${questionData?._id}`}>
            <h5 className="que font-weight-normal">
              {questionData?.title}
            </h5>
          </Link>
          <p>
       
          </p>
          <button
            className="btn btn-sm mr-1"
            style={{
              color: "rgb(122, 167, 199)",
              backgroundColor: "rgb(225, 236, 244)",
              fontSize: "10px",
            }}
          >
         lknnkjn
          </button>
          <button
            className="btn btn-sm mr-1"
            style={{
              color: "rgb(122, 167, 199)",
              backgroundColor: "rgb(225, 236, 244)",
              fontSize: "10px",
            }}
          >
kklmlkmkl
          </button>
          <button
            className="btn btn-sm mr-1"
            style={{
              color: "rgb(122, 167, 199)",
              backgroundColor: "rgb(225, 236, 244)",
              fontSize: "10px",
            }}
          >hashtag 3
            
          </button>
          <button
            className="btn btn-sm mr-1"
            style={{
              color: "rgb(122, 167, 199)",
              backgroundColor: "rgb(225, 236, 244)",
              fontSize: "10px",
            }}
          >hashtag 4
            
          </button>
          <div className="profile float-right mt-4">
            <span className="mb-1">asked 10320 ago</span>
            <div className="d-flex mr-3">
              <img
                src=''
                alt="User"
                className="mr-2"
                width="40px"
                height="40px"
                style={{ borderRadius: "1rem" }}
              />
              <div>
                <Link to="/">user</Link>
                <div className="text-muted">
                  <b>score</b>
                  <span className="dot"></span>
                  <span className="dot2"></span> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     })} 
     
    </>
  );
};

export default UserQuestions;


const data = [
    {
        view: 111,
        question:` Excel search multiples rows containing substring`,
        ans:`I have an Excel file with 2 sheets : The first one got a list of
        keywords in a column. The second one got sentences on a column along
        with an id on another column. Thus the 2 sheets look like this : ...`,
        hashtag1:"excel",
        hashtag2: "Search",
        hashtag3 :"excel-formula",
        time:" 1 min",
        img:"../Images/user6.png",
        user:"Dolly singh",
        score:111,
        badge:"9",
        gold:"234",
    },
    {
        view: 31,
        question:`java method reference as Supplier`,
        ans:`Currently, this is my code: private Supplier<BundleEntryResponseComponent> buildSupplier( final RequestDetails requestDetails, final Resource resource ) { return () -> this....`,
        hashtag1:"Java",
        hashtag2:"Java-11",
        hashtag3:"php",
        time:" 2 min",
        img:"../Images/user2.png",
        user:"Jordi",
        score:"16.7K",
        badge:"239",
    },
    {
        view: 41,
        question:`How do i resolve "Cannot read properties of undefined (reading 'ownerDocument')"`,
        ans:`I am trying to add a div inside the main div on page loading, it works when i write the code like this: function DivAdder() { $('#mainDiv').append('<div class="newspaper-wrapper"><...`,
        hashtag1:"javascript",
        hashtag2: "javascript",
        hashtag3 :"dom",
        hashtag4:"jquery",
        time:" 1 min",
        img:"../Images/user6.png",
        user:"Dolly singh",
        score:111,
        badge:"9",
    },
    {
        view: 351,
        question:` Excel search multiples rows containing substring`,
        ans:`I have an Excel file with 2 sheets : The first one got a list of
        keywords in a column. The second one got sentences on a column along
        with an id on another column. Thus the 2 sheets look like this : ...`,
        hashtag1:"excel",
        hashtag2: "Search",
        hashtag3 :"excel-formula",
        time:" 1 min",
        img:"../Images/user3.png",
        user:"Dolly singh",
        score:111,
        gold:"34",
        badge:"9",
    },
    {
        view: 54,
        question:`getInitialProps cant be accessed`,
        ans:`I am having trouble accessing 'initialReduxState' when setting the hook with 'setReduxStore' in getinitialProps and cant seem to figure out why. Below is a snippet of the code. export default (App)...`,
        hashtag1:"javascript",
        hashtag2: "function",
        hashtag3 :"sql",
        time:" 43 min",
        img:"../Images/user4.png",
        user:"redibis",
        score:141,
        badge:"2",
    },
    {
        view: 111,
        question:`How to access router in different viewModel in Oracle OJET`,
        ans:`When we create the scaffolded application in ojet using ojet create <project name> --template=navdrawer|navbar|basic|blank it produces appController.js which has the following code for routing ...`,
        hashtag1:"oracle",
        hashtag2: "oracle-jet",
        time:" 45 min",
        img:"../Images/user1.png",
        user:"anupamD",
        score:660,
        badge:"16",
    },
    {
        view: 111,
        question:`How to get a void** to be a parameter of a C library?`,
        ans:`I'm trying to call a C library from GO using cgo. The C library has the following function: int receive(void** data); // I'd call it like that: void* myptr; int ret = receive(&myptr); // And ...`,
        hashtag1:"c",
        hashtag2: "C language",
        hashtag3 :"c++",
        time:" 15 min",
        img:"../Images/user5.png",
        user:"Alexis",
        score:"16,671",
        badge:"165",
        gold:"34",
    },
    {
        view: 451,
        question:`Hope you have a pleasant holiday! I have a small problem with the code below which does not generate an auto-increment identifier and is asking for your help. Can you help me please ? <span class=&...`,
        hashtag1:"JavaScript",
        hashtag2: "Php",
        time:" 1 min",
        img:"../Images/user3.png",
        user:"Ahmad Jaber",
        score:34,
        badge:"5",
    },
    {
        view: 111,
        question:`How to access router in different viewModel in Oracle OJET`,
        ans:`When we create the scaffolded application in ojet using ojet create <project name> --template=navdrawer|navbar|basic|blank it produces appController.js which has the following code for routing ...`,
        hashtag1:"oracle",
        hashtag2: "oracle-jet",
        time:" 45 min",
        img:"../Images/user1.png",
        user:"anupamD",
        score:660,
        badge:"16",
    },
    {
        view: 111,
        question:`How to get a void** to be a parameter of a C library?`,
        ans:`I'm trying to call a C library from GO using cgo. The C library has the following function: int receive(void** data); // I'd call it like that: void* myptr; int ret = receive(&myptr); // And ...`,
        hashtag1:"c",
        hashtag2: "C language",
        hashtag3 :"c++",
        time:" 15 min",
        img:"../Images/user5.png",
        user:"Alexis",
        score:"16,671",
        badge:"165",
        gold:"34",
    },
    {
        view: 54,
        question:`getInitialProps cant be accessed`,
        ans:`I am having trouble accessing 'initialReduxState' when setting the hook with 'setReduxStore' in getinitialProps and cant seem to figure out why. Below is a snippet of the code. export default (App)...`,
        hashtag1:"javascript",
        hashtag2: "function",
        hashtag3 :"sql",
        time:" 43 min",
        img:"../Images/user4.png",
        user:"redibis",
        score:141,
        badge:"2",
    },
   

];

