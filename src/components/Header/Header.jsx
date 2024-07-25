import React, { useState } from "react";

import cl from "./Header.module.css";
import logo from "../../images/logo.jpg";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={cl.header}>
      <div className={cl.header__wrapper}>
        <div className={cl.header__left}>
          <Link to="/" className={cl.item}>
            <img className={cl.logo} src={logo} alt="logo" />
          </Link>
          <p className={cl.title}>Architectural workshop</p>
        </div>
        <div className={cl.header__right}>
          <nav className={`${cl.navigation} ${isMenuOpen ? cl.open : ""}`}>
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

          <div className={cl.burger} onClick={toggleMenu}>
            <RxHamburgerMenu className={cl.burger__icon} />
          </div>
        </div>
      </div>
    </div>
  );
}
