import React from "react";

import cl from "./Header.module.css";
import logo from "../../images/logo.jpg";

export default function Header() {
  return (
    <div className={cl.header}>
      <div className={cl.header__wrapper}>
        <div className={cl.header__left}>
          <img className={cl.logo} src={logo} alt="logo" />
          <p className={cl.title}>Architectural workshop</p>
        </div>
        <div className={cl.header__right}>
          <nav className={cl.navigation}>
            <p className={cl.item}>Галерея</p>
            <p className={cl.item}>Контакты</p>
            <p className={cl.item}>О нас</p>
          </nav>
        </div>
      </div>
    </div>
  );
}
