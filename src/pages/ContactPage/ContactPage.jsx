import React from "react";
import { MdEmail } from "react-icons/md";
import { SlSocialVkontakte } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";

import contacts from "../../images/phone.jpg";

import cl from "./ContactPage.module.css";

export default function ContantPage() {
  return (
    <div className={cl.contact}>
      <div className={cl.contact__wrapper}>
        <div className={cl.contact__left}>
          <nav className={cl.contact__navigation}>
            <img className={cl.contact__image} src={contacts} alt="image" />
          </nav>
        </div>
        <div className={cl.contact__right}>
          <h4 className={cl.contact__title}>Контакты</h4>
          <hr className={cl.contact_hr} />
          <div className={cl.contact__links}>
            <ul className={cl.links__nav}>
              <li className={cl.links__item}>
                <a href="https://vk.com/public226532649" target="_blank">
                  <SlSocialVkontakte className={cl.links__icon} />
                </a>
              </li>
              <li className={cl.links__item}>
                <a href="https://vk.com/public226532649" target="_blank">
                  <MdEmail className={cl.links__icon} />
                </a>
                <hr className={cl.item__hr} />
                <p className={cl.links__title}>
                  <b className={cl.contact__span}>Почта: </b>
                  2018asm@mail.ru
                </p>
              </li>
              <li className={cl.links__item}>
                <a
                  href="https://www.instagram.com/arc.workshop?igsh=c3hmdmh4bWVqcHN1&utm_source=qr"
                  target="_blank"
                >
                  <FaInstagram className={cl.links__icon} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
