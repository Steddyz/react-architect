import React from "react";

import { products } from "../../../products";
import cl from "./Gallery.module.css";

export default function Gallery() {
  return (
    <div className={cl.galley}>
      {products.map((image, id) => (
        <div key={id} className={cl.galley__card}>
          <img src={image} alt="image" className={cl.galley__image} />
        </div>
      ))}
    </div>
  );
}
