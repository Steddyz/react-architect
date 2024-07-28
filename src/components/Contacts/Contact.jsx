import React from "react";
import { FaPhone } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";

import cl from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={cl.contact}>
      <ul className={cl.contact__wrapper}>
        <lI className={cl.contact__item}>
          <FaPhone style={{ marginRight: "8px" }} />
          +7 (978) 752 69 17
        </lI>
        <lI className={cl.contact__item}>
          <FaMapMarkerAlt style={{ marginRight: "8px" }} />
          г. Симферополь, ул. Скалистая, 11
        </lI>
      </ul>
    </div>
  );
}
