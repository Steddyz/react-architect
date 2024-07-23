import React from "react";

import cl from "./AboutPage.module.css";
import aboutImage from "../../images/bannerCont.jpg";

export default function AboutPage() {
  return (
    <div className={cl.about}>
      <div className={cl.about__wrapper}>
        <div className={cl.about__left}>
          <h4 className={cl.about__title}>Коротко о наc</h4>
          <p className={cl.about__description}>
            Архитектурная мастерская, специализирующаяся на изготовлении изделий
            из архитектурного бетона, - это место, где рождаются шедевры,
            соединяющие в себе искусство, технологию и историю. Каждый предмет,
            созданный профессионалами этой мастерской, является уникальным и
            неповторимым, воплощая в себе дух времени и культурное наследие.
          </p>
        </div>
        <div className={cl.about__right}>
          <nav className={cl.about__navigation}>
            <img className={cl.about__image} src={aboutImage} alt="image" />
          </nav>
        </div>
      </div>
    </div>
  );
}
