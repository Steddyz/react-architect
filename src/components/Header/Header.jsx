import React from "react";

import cl from "./Header.module.css";
import logo from "../../images/logo.jpg";
import { Link } from "react-router-dom";

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
            <Link to="/" className={cl.item}>
              Главная
            </Link>
            <Link to="/gallery" className={cl.item}>
              Галерея
            </Link>
            <Link to="/contact" className={cl.item}>
              Контакты
            </Link>
            <Link to="/about" className={cl.item}>
              О нас
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
