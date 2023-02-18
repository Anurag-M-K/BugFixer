// import { Avatar } from "@mui/material";
// import React from "react";
// import { Link } from "react-router-dom";
// import './css/AllQuestions.css';
// import ReactHtmlParser from 'react-html-parser';

// function AllQuestions({question}) {
//  var tags = question.tags
// function truncate(str,n){
//   return str?.length > n ? str.substr(0,n-1)+ "..." :str
// }
//   return (
//     <div className=" all-questions">
//       <div className="all-questions-container">
//         <div className="all-questions-left">
//           <div className="all-options">
//             <div className="all-option">
//               <p>0</p>
//               <span>Votes</span>
//             </div>
//             <div className="all-option">
//               <p>{question?.answerDetails?.length}</p>
//               <span>Answers</span>
//             </div>
//             <div className="all-option">
//               <p>0</p>
//               <small>Views</small>
//             </div>
//           </div>
//         </div>
//         <div className="question-answer ">
//           <Link to={`/question/:id=${question?._id}`} className="titleStyle">{question?.title}</Link>
//           <div
//             style={{
//               width: "90%",
//             }}
//           >
//             <div>
//             {ReactHtmlParser(truncate(question?.body,300))}
//             </div>
//           </div>
//        <div 
//        style={{
//         display:"flex",

//        }}
//        >
//         {tags.forEach((tag)=>(
          
//           <>
//           <span className="question-tags">{tag} </span>
//           </>
//         ))}
//          </div>
       
//         <div className="author">
//             <small>{new Date(question.created_at).toLocaleString()}</small>
//             <span className="author-details"><Avatar src={question?.user?.imageUr} alt="fronend"/>
//             <p>{question?.user?.userDetails.email ? question?.user?.userDetails.email :String( question?.user?.email)
//             .split('@')[0]}</p>
//             </span>
//         </div>
//         </div>
       
//       </div>
//     </div>
//   );
// }

// export default AllQuestions;
