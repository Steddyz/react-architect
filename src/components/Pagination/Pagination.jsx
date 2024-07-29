import React from "react";

import cl from "./Pagination.module.css";
import { Link } from "react-router-dom";

export default function Pagination({ itemsPerPage, totalItems, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i < Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className={cl.pagination}>
        {pageNumbers.map((number) => (
          <li key={number} className={cl.page_item}>
            <Link onClick={() => paginate(number)} className={cl.page_link}>
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
