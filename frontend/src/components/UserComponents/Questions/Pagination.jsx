import React from "react";
import {Link}  from "react-router-dom";

const Pagination = () => {
  return (
    <>
    {/* Buttom pagination starts */}
      <nav aria-label="Page navigation example" style={{ fontSize: "16px" }}>
        <ul class="pagination justify-content-center my-4">
          <li class="page-item disabled">
             <Link to="/"  class="page-link "   tabindex="-1" aria-disabled="true">
              Previous
             </Link>
          </li>
          <li class="page-item active" aria-current="page">
            <span class="page-link">
              1<span class="sr-only">(current)</span>
            </span>
          </li>
          <li class="page-item">
             <Link to="/"  class="page-link text-muted"  >
              2
             </Link>
          </li>
          <li class="page-item">
             <Link to="/"  class="page-link text-muted"  >
              3
             </Link>
          </li>
          <li class="page-item">
             <Link to="/"  class="page-link text-muted"  >
              4
             </Link>
          </li>
          <li class="page-item">
             <Link to="/"  class="page-link text-muted"  >
              5
             </Link>
          </li>
          <li class="page-item">
             <Link to="/"  class="page-link text-muted"  >
              ...
             </Link>
          </li>
          <li class="page-item">
             <Link to="/"  class="page-link text-muted"  >
              1000000
             </Link>
          </li>
          <li class="page-item">
             <Link to="/"  class="page-link"  >
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
