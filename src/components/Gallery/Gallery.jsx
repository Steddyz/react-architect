import React, { useState } from "react";

import { products } from "../../../products";
import cl from "./Gallery.module.css";
import Pagination from "../Pagination/Pagination";

export default function Gallery() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;

  const currentItems = products.slice(firstItemIndex, lastItemIndex);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Pagination
        paginate={paginate}
        itemsPerPage={itemsPerPage}
        totalItems={products.length}
      />
      <div className={cl.galley}>
        {currentItems.map((product, id) => (
          <div key={id} className={cl.galley__card}>
            <img src={product.image} alt="image" className={cl.galley__image} />
          </div>
        ))}
      </div>
      <Pagination
        paginate={paginate}
        itemsPerPage={itemsPerPage}
        totalItems={products.length}
      />
    </>
  );
}
