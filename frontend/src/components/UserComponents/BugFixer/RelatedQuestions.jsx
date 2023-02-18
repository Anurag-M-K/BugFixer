// import React from "react";
// import { Link } from "react-router-dom";

// const questions = [
//   {
//     img: "../Images/user4.png",
//     ques: `how to upgrade Ubuntu packages in WSL alongside Microsoft Store auto-update`,
//   },
//   {
//     img: "../Images/user6.png",
//     ques: `Contradictions caused by moving faster than light`,
//   },
//   {
//     img: "../Images/user4.png",
//     ques: `How do ancient Chinese "mirrors" such as these in the National Museum function?
//         `,
//   },
//   {
//     img: "../Images/user6.png",
//     ques: `Apply HoldForm on only a part of an expression`,
//   },
//   {
//     img: "../Images/user4.png",
//     ques: `Does NEC allow mixing wire gauge in distinct sections of conduit when derating?
//         `,
//   },
//   {
//     img: "../Images/user6.png",
//     ques: `How to initialize/use SD cards with SPI?`,
//   },
//   {
//     img: "../Images/user4.png",
//     ques: `If we can get people to the moon and back, why are we so adamant that it's impossible to service James Webb at 4x that with a one way robotic vehicle?`,
//   },
//   {
//     img: "../Images/user6.png",
//     ques: `What is causing the diffraction pattern on my ceiling?`,
//   },
//   {
//     img: "../Images/user4.png",
//     ques: `Can any national European company do business in all other member states?
//         `,
//   },
//   {
//     img: "../Images/user6.png",
//     ques: `What's the word/verb meaning "to bend something inwards"`,
//   },
//   {
//     img: "../Images/user4.png",
//     ques: `Adding oil/fat to bread dough
//         more hot questions"`,
//   },
//   {
//     img: "../Images/user6.png",
//     ques: `Apply HoldForm on only a part of an expression`,
//   },
//   {
//     img: "../Images/user4.png",
//     ques: `Does NEC allow mixing wire gauge in distinct sections of conduit when derating?
//         `,
//   },
//   {
//     img: "../Images/user6.png",
//     ques: `How to initialize/use SD cards with SPI?`,
//   },

//   {
//     img: "../Images/user6.png",
//     ques: `Apply HoldForm on only a part of an expression`,
//   },
//   {
//     img: "../Images/user4.png",
//     ques: `Does NEC allow mixing wire gauge in distinct sections of conduit when derating?
//         `,
//   },
//   {
//     img: "../Images/user6.png",
//     ques: `How to initialize/use SD cards with SPI?`,
//   },
// ];

// const RelatedQuestion = () => {
//   return (
//     <>
//       {/* quotes started */}
//       <div className="relatedQuestion">
//         <h5 className="mt-5">Hot Network Questions</h5>
//         {questions.map((text) => {
//           return (
//             <div className=" d-flex mt-3">
//               <div>
//                 <img
//                   src={process.env.PUBLIC_URL + text.img}
//                   alt=""
//                   width="15px"
//                   className="mr-2"
//                 />
//               </div>
//               <Link to="/">{text.ques}</Link>
//             </div>
//           );
//         })}
//       </div>
//       {/* quotes started */}
//     </>
//   );
// };

// export default RelatedQuestion;
