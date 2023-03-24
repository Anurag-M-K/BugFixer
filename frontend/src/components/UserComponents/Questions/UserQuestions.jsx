import React, { useState } from "react";
import "./UserQuestions.scss";
import ReactHtmlParser from "react-html-parser";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Pagination from "./Pagination";
import ReactPaginate from "react-paginate";

const UserQuestions = () => {
  const { questionDetails } = useSelector((state) => state.question);
  const [ postsPerPage ] = useState(5)
  const [ currentPage , setCurrentPage ] = useState(1)
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  const max =10

  //seting pagination 
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const startPage = Math.max(1,currentPage- Math.floor(max/2))
  const endPage = Math.min(questionDetails.length , startPage+max-1)
  const currentPosts = questionDetails.slice(indexOfFirstPost , indexOfLastPost)

  //change page
  const paginate = (pageNumber)=> setCurrentPage(pageNumber)



///////////////////////////////////////////////////
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + postsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = questionDetails.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(questionDetails.length / postsPerPage);


// Invoke when user click to request another page.
const handlePageClick = (event) => {
  const newOffset = (event.selected * postsPerPage) % questionDetails?.length;
  console.log(
    `User requested page number ${event.selected}, which is offset ${newOffset}`
  );
  setItemOffset(newOffset);
};
  return (
    <>
      {currentItems?.map((questionData) => {
        return (
          <div key={questionData._id}
            className="userQuestions d-flex border-bottom py-2"
            style={{ fontSize: "12px" }}
          >
            <div className="left text-muted mr-3">
              <p>votes: {questionData?.vote.length ?  questionData?.vote.length : "0"} </p>
              <br />
              <p>Answers:{questionData?.answerDetails.length ? questionData?.answerDetails.length : "0"} </p>
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
      <div className="pagination">

<div>

        {/* <Pagination  endPage={endPage} startPage={startPage} postsPerPage={postsPerPage} totalPosts={questionDetails.length} paginate={paginate} /> */}
        <ReactPaginate
        breakLabel="..."
        nextLabel="next"
        pageRangeDisplayed={1}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        renderOnZeroPageCount={null}
        breakClassName={'page-item'}
 breakLinkClassName={'page-link'}
 containerClassName={'pagination'}
 pageClassName={'page-item'}
 pageLinkClassName={'page-link'}
 previousClassName={'page-item'}
 previousLinkClassName={'page-link'}
 nextClassName={'page-item'}
 nextLinkClassName={'page-link'}
 activeClassName={'active'}
        
        />
</div>
      </div>
    </>
  );
};

export default UserQuestions;
