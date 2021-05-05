import React from "react";
import _ from "lodash";

export default function Pagination({ itemsCount, pageSize, onPageChange }) {
  const pagesCount = Math.ceil(itemsCount / pageSize); // Math.ceil needed float problem
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <ul className="pagination">
      {pages.map((page) => (
        <li key={page} className="page-item">
          <a className="page-link">{page}</a>
        </li>
      ))}
    </ul>
  );
}
