import React, { useState } from "react";

export default function Pagination({
  totalPosts,
  postsPerPage,
  paginate,
  currentPage,
  loading,
}) {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumber.push(i);
  }

  const handlePrevious = () => {
    if (currentPage > 1) {
        paginate(currentPage - 1);
      }
  };

  const handleNext = () => {
    if (currentPage < pageNumber.length) {
        paginate(currentPage + 1);
      }
  };


  return (
     loading && (
      <div className="container">
        <nav>
          <ul className="pagination pagination-sm justify-content-center">
            <li class="page-item">
              <a id="previous" class="page-link" href="#" onClick={handlePrevious}>
                Previous
              </a>
            </li>
            {pageNumber.map((number) => (
              <>
                <li key={number}>
                  <a
                    onClick={() => paginate(number)}
                    className="page-link"
                    href="#"
                  >
                    {number}
                  </a>
                </li>
              </>
            ))}
            <li class="page-item">
              <a id="next" class="page-link" href="#" onClick={handleNext}>
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    )
  );
}
