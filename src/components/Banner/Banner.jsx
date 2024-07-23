import React from "react";

import cl from "./Banner.module.css";
import banner from "../../images/bannerMain.jpg";

export default function Banner() {
  return (
    <div className={cl.banner}>
      <div className={cl.banner__wrapper}>
        <div className={cl.banner_left}>
          <h4 className={cl.banner__title}>
            Производство декоративных изделий
          </h4>
          <p className={cl.banner__description}>ВЫСОКОЙ ПРОЧНОСТИ</p>
          <hr />
        </div>
        <div className={cl.banner_right}>
          <nav className={cl.banner__navigation}>
            <img src={banner} alt="banner" className={cl.banner__image} />
          </nav>
        </div>
      </div>
    </div>
  );
}
