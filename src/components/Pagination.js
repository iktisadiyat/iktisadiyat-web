// src/components/Pagination.js
import React from "react";
import { Link } from "gatsby";

const Pagination = ({ currentPage, numPages }) => {
  if (numPages <= 1) return null; // Don't render pagination if there's only one page

  return (
    <div className="pagination">
      {/* Previous Page Link */}
      {currentPage > 1 && (
        <Link to={currentPage === 2 ? `/` : `/page/${currentPage - 1}`} className="pagination-link">
          ← Bir önceki sayfa
        </Link>
      )}

      {/* Dropdown for Quick Navigation */}
      <select
        className="pagination-dropdown"
        value={currentPage}
        onChange={(e) => {
          const selectedPage = Number(e.target.value);
          if (selectedPage === 1) {
            window.location.href = `/`;
          } else {
            window.location.href = `/page/${selectedPage}`;
          }
        }}
      >
        {Array.from({ length: numPages }, (_, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1}. sayfa
          </option>
        ))}
      </select>

      {/* Next Page Link */}
      {currentPage < numPages && (
        <Link to={`/page/${currentPage + 1}`} className="pagination-link">
          Bir sonraki sayfa →
        </Link>
      )}
    </div>
  );
};

export default Pagination;