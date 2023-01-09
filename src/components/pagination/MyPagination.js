import React from "react";
import "./myPagination.scss"

const MyPagination = ({ postPerPage, totalPost, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="paginates-container">
      <ul>
        {pageNumbers.map((number) => (
          <li key={number} className="pagination__page">
            <a onClick={() => paginate(number)} href="!#">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MyPagination;
