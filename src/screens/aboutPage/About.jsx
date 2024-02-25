import React from "react";
import "./AboutStyle.css";
const About = () => {
  return (
    <main className="main">
      <section className="about_present">
        <p>
          InterDialogue Bussiness - оказываем консалтинговые услуги в Восточной и Западной Европе.
        </p>
        <p>
        "Опыт, на который можно положиться. Ваш успех - наша экспертиза."
        </p>
        <div className="card_item">
          <div className="card_image"></div>
          <div className="card_info">
            <p>Лазиз Вагаев</p>
            <p>Президент компании</p>
          </div>
        </div>
      </section>
      <section className="about">
      <div className="about_content_2">
            <div className="about_content_2_block">
              <div className="about_content_2_block_header">
                <p>Почему именно мы?</p>
              </div>
              <div className="about_content_2_block_text">
                <p>
                  "Выберите нашу консалтинговую компанию для успешного развития
                  вашего бизнеса. Мы предлагаем комплексные решения, основанные
                  на глубоком знании рынка, инновационных подходах и богатом
                  опыте. Наша команда готова поддержать вас в решении самых
                  сложных задач, обеспечивая надежное партнерство и
                  профессиональное сопровождение на пути к успеху."
                </p>
                {/* <img src="/images/flag-avstrii.jpg" alt="" /> */}
              </div>
            </div>
          </div>
        </section>
    </main>
  );
};

export default About;
