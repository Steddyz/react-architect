import React from "react";

import cl from "./GalleryPage.module.css";

export default function GalleryPage() {
  return (
    <div className={cl.gallery}>
      <div className={cl.wrapper}>
        <div className={cl.gallery__banner}>
          <div className={cl.gallery__banner_left}>
            <h4 className={cl.gallery__title}>Наши работы</h4>
          </div>
          <div className={cl.gallery__banner_right}>
            <img alt="banner" />
          </div>
        </div>
        <div className={cl.gallery__list}>
          <div className={cl.list__item}>
            <div className={cl.item__wrapper}>
              <img alt="item" />
              <p zxczxc></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
