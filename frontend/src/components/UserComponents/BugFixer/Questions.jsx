// import React from "react";
// import "./scss/Questions.scss";
// import RightSidebar from "./RightSidebar";
// import UserQuestions from "./UserQuestions";
// import Pagination from "./Pagination";
// import Sidebar from "../../AdminComponents/AdminDashboard/Sidebar";
// import { Link } from "react-router-dom";

// const Questions = () => {
//   return (
//     <>
//       <div className="container-fluid questions">
//         <div className="row" style={{ margin: "0 8%" }}>
//           {/* Left Sidebar added */}
//           <div
//             className="questions--LeftSidebar col-md-2 border"
//             style={{ fontSize: "14px", overflowY: "scroll" }}
//           >
//             <Sidebar />
//           </div>
//           <div
//             className="questions--body col-md-7"
//             style={{ fontSize: "12px" }}
//           >
//             <div>
//               <div className="d-flex justify-content-between my-3">
//                 <h2 className="font-weight-normal">
//                   Questions tagged [javascript]
//                 </h2>
//                 <Link to='/add-question'><button
//                   className="btn btn-primary btn-small"
//                   style={{ fontSize: "14px" }}
//                 >
//                   Ask Question
//                 </button></Link>
//               </div>
//             </div>
//             <div className="d-flex justify-content-between">
//               <p style={{ fontSize: "16px" }}>22,058,922 questions</p>
//               <div className="border">
//                 <button className="btn  border-right active">Newest</button>
//                 <button className="btn border-right">Active</button>
//                 <button className="btn  border-right">
//                   Bounced{" "}
//                   <small
//                     className="bg-primary text-light px-1 rounded"
//                     style={{ forntSize: "10px" }}
//                   >
//                     252
//                   </small>
//                 </button>
//                 <button className="btn border-right">Unanswered</button>
//                 <button
//                   className="btn dropdown-toggle"
//                   data-toggle="dropdown"
//                   aria-haspopup="true"
//                   aria-expanded="false"
//                 >
//                   More
//                 </button>
//                 <div class="dropdown-menu" aria-labelledby="navbarDropdown">
//                   <button class="dropdown-item">Frequents</button>
//                   <button class="dropdown-item">Votes</button>
//                   <div class="dropdown-divider"></div>
//                   <button class="dropdown-item disabled">
//                     Unanswered(my tags)
//                   </button>
//                 </div>
//               </div>
//               <button
//                 className="btn border"
//                 style={{
//                   color: "rgb(122, 167, 199)",
//                   backgroundColor: "rgb(225, 236, 244)",
//                 }}
//               >
//                 <i class="fas fa-sort-amount-up-alt"></i> Filter
//               </button>
//             </div>
//             <hr />
//             {/* Users Questionsadded */}
//             <UserQuestions />

//             {/* Pagination added */}
//             <Pagination />
//           </div>

//           {/* Right Sidebar added */}
//           <div
//             className="questions-rightSidebar col-md-3"
//             style={{ fontSize: "12px", lineHeight: "10px" }}
//           >
//             <RightSidebar />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Questions;
