import React, { useState } from "react";
import ReactPaginate  from 'react-paginate' 

// const Pagination = ({endpage , startPage , postsPerPage , totalPosts ,paginate}) => {
  const Pagination = ({questionDetails,postsPerPage}) => {

    const pageNumbers = [];
    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + postsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = questionDetails.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(questionDetails.length / postsPerPage);
  

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % questionDetails?.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (


<nav style={{cursor:"pointer"}}>
      <ul className='pagination'>
        {/* {pageNumbers.map(number => (
           <li key={number} className='page-item'>
            <a onClick={() => paginate(number)}  className='page-link'>
              {number}
            </a>
          </li>
        ))} */}

        <ReactPaginate
        breakLabel="..."
        nextLabel="next"
        pageRangeDisplayed={postsPerPage}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        
        
        />
      </ul>
    </nav>
       
  );
};

export default Pagination;
