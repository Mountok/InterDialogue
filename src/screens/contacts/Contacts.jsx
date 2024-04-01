import React from "react";
import "./ContactsStyle.css";
import { t } from "i18next";
const Contacts = () => {
  return (
    <main className="main">
      <section className="contacts_presentation">
        <div className="title">
          <p>{t("contacts_present_h")}</p>
          <p>
          {t("contacts_present_p")}  
          </p>
        </div>
      </section>
      <section className="contacts_list">
        <div>
          <p>Адрес:</p>
          <h3>
            {t("footer_address")}
          </h3>
        </div>
        <div>
          <p>Mobile</p>
          <h3>(+43) 664 568 01 55</h3>
          <p>Phone</p>
          <h3>+43 (1) 890 62 70</h3>
        </div>


        <div>
          <p>Email:</p>
          <h3>office@interdialogbusiness.com</h3>
          <p>Phone:</p>
          <h3>+43 (1) 890 62 70</h3>





        </div>
      </section>
      <section className="our_data">
        <div className="our_data_bg">
          <ul>
            <li>Почтовый адрес фактического филиала: Австрия, г. Вена,
              ул. Нойвалдеггерштрассе, 19-21/4/5
              (1170 Wien, Nuewaldeggerstrabe, 19-21/4/5) </li>
            <li>Надзорный орган: (коммерческий орган или компетентный суд)</li>
            <li>Членство в Торговой палате: (со ссылкой на запись WKO)</li>
            <li>Ссылка на применимые коммерческие или профессиональные правила: (рекомендуемая информация для коммерческой деятельности: idR the GewO)</li>
            <li>Ссылка на конфиденциальность:</li>
            <li>Ответственность: GmbH "InterDialog Business"</li>
            <li>Регистрационный номер: Bu</li>
            <li>UID: </li>
            <li>Коммерческий регистрационный номер: </li>
            <li>Данные учетной записи: </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Contacts;
