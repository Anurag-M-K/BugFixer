// import axios from 'axios';
// import React from 'react';
// import { useState } from 'react';
// import { useEffect } from 'react';
// import Main from "./Main";
// import Sidebar from "./Sidebar";

// function index() {
//   const [questions , setQuestions ] = useState([])

//   useEffect( ()=>{
// async function findQuestions () {
//     axios.defaults.baseURL = "http://localhost:80"
//     await axios.get('/api/getQuestion').then(res => {
//       setQuestions(res.data.reverse())
//       return res.data
//     }).catch(err =>{
//       console.log(err);
//     })
//   }
//   findQuestions()
//   },[])
 


//   return (
//     <div className="bugfix-index">
//       <div className="bugfix-index-content">
//       <div
//             className="questions--LeftSidebar col-md-2 border"
//             style={{ fontSize: "14px", overflowY: "scroll" }}
//           >
//             <Sidebar />
//           </div>
//         <Main key={questions._id} questions={questions} />
//       </div>
//     </div>
//   );
// }

// export default index;
