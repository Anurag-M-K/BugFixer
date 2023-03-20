import React from "react";
import {Link}  from "react-router-dom";

const Pagination = () => {
  return (
    <>
    {/* Buttom pagination starts */}
      <nav aria-label="Page navigation example" style={{ fontSize: "16px" }}>
        <ul className="pagination justify-content-center my-4">
          <li className="page-item disabled">
             <Link to="/"  className="page-link "   tabIndex="-1" aria-disabled="true">
              Previous
             </Link>
          </li>
          <li className="page-item active" aria-current="page">
            <span className="page-link">
              1<span className="sr-only">(current)</span>
            </span>
          </li>
          <li className="page-item">
             <Link to="/"  className="page-link text-muted"  >
              2
             </Link>
          </li>
          <li className="page-item">
             <Link to="/"  className="page-link text-muted"  >
              3
             </Link>
          </li>
          <li className="page-item">
             <Link to="/"  className="page-link text-muted"  >
              4
             </Link>
          </li>
          <li className="page-item">
             <Link to="/"  className="page-link text-muted"  >
              5
             </Link>
          </li>
          <li className="page-item">
             <Link to="/"  className="page-link text-muted"  >
              ...
             </Link>
          </li>
          <li className="page-item">
             <Link to="/"  className="page-link text-muted"  >
              1000000
             </Link>
          </li>
          <li className="page-item">
             <Link to="/"  className="page-link"  >
              Next
             </Link>
          </li>
        </ul>
      </nav>
      {/* Buttom pagination starts */}
    </>
  );
};

export default Pagination;
