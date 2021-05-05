import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

export default function Pagination({
  itemsCount,
  pageSize,
  currentPage,
  onPageChange,
}) {
  const pagesCount = Math.ceil(itemsCount / pageSize); // Math.ceil needed for changing float into integer
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <ul className="pagination">
      {pages.map((page) => (
        <li
          key={page}
          className={currentPage === page ? "page-item active" : "page-item"}
        >
          <a className="page-link" onClick={() => onPageChange(page)}>
            {page}
          </a>
        </li>
      ))}
    </ul>
  );
}

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};
