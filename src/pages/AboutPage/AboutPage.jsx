import React from "react";

import cl from "./AboutPage.module.css";

export default function AboutPage() {
  return (
    <div className={cl.about}>
      <div className={cl.about__wrapper}>
        <div className={cl.about__left}>
          <h4 className={cl.about__title}>Коротко о наc</h4>
          <p>
            «Парапет-Крым» – производственная компания, специализирующаяся на
            выпуске бетонной продукции, а также на изготовлении пластиковых форм
            для отливки изделий из бетона. Компания была основана в 2005 году.
            За время своего существования она зарекомендовала себя, как
            производитель высококачественной продукции и ответственный
            добросовестный поставщик. Нам удалось добиться оптимального
            соотношения цены и качества выпускаемых товаров.
          </p>
        </div>
        <div className={cl.about__right}>
          <nav className={cl.about__navigation}>
            <img className={cl.about__image} src="" alt="image" />
          </nav>
        </div>
      </div>
    </div>
  );
}
