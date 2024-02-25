import React from "react";
import "./ContactsStyle.css";
const Contacts = () => {
  return (
    <main className="main">
      <section className="contacts_presentation">
        <div className="title">
          <p>Главный офис</p>
          <p>
            Наш главный офис располагаеться в Вене, хотя компания работает во
            всех странах Европы, многие специалисты находяться в постоянных
            командировках или задействованы в представительствах других стран.
          </p>
        </div>
      </section>
      <section className="contacts_list">
        <div>
            <p>Адрес:</p>
            <h3>
                Австрия, г. Вена, <br /> ул. Нойвалдеггерштрассе, 19-21/4/5 <br />
                (1170 Wien, Nuewaldeggerstrabe, 19-21/4/5)
            </h3>
        </div>
        <div>
            <p>Мобильный</p>
            <h3>(+43) 664 568 01 55</h3>
            <p>Телефон</p> 
            <h3>+43 (1) 890 62 70</h3>
        </div>


        <div>
          <p>Емайл:</p>
          <h3>office@interdialogbusiness.com</h3>
          <p>Факс:</p>
          <h3>+43 (1) 890 62 70</h3>
        




        </div>
      </section>
    </main>
  );
};

export default Contacts;
