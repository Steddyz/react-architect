import React from "react";

import cl from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={cl.footer}>
      <div className={cl.footer__wrapper}>
        <p> © 2024 Все права защищены </p>
        <span className={cl.footer__span}> Steddy </span>
      </div>
    </div>
  );
}
