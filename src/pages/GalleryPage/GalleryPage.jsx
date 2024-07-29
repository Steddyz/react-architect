import React from "react";

import cl from "./GalleryPage.module.css";
import Gallery from "../../components/Gallery/Gallery";
import bannerGallery from "../../images/bannerGallery.jpg";

export default function GalleryPage() {
  return (
    <div className={cl.gallery}>
      <div className={cl.gallery__wrapper}>
        <div className={cl.banner}>
          <div className={cl.banner__wrapper}>
            <div className={cl.banner_left}>
              <h4 className={cl.banner__title}>Галерея</h4>
              <hr className={cl.banner__hr} />
            </div>
            <div className={cl.banner_right}>
              <nav className={cl.banner__navigation}>
                <img
                  src={bannerGallery}
                  alt="banner"
                  className={cl.banner__image}
                />
              </nav>
            </div>
          </div>
        </div>
        <Gallery />
      </div>
    </div>
  );
}
