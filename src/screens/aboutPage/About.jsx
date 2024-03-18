import React from "react";
import "./AboutStyle.css";
const About = () => {
  return (
    <main className="main">
     
      <section className="about_present">
        <p>
          InterDialogue Bussiness - оказываем консалтинговые услуги в Восточной
          и Западной Европе.
        </p>
        <p>"Опыт, на который можно положиться. Ваш успех - наша экспертиза."</p>
        <div className="card_item">
          <div className="card_image"></div>
          <div className="card_info">
            <p>Лазиз Вагаев</p>
            <p>Президент компании</p>
          </div>
        </div>
      </section>
      
      <section className="about_us">
        <div>
          <h2>Какие услуги мы оказываем</h2>
          <p>
            Будучи опытными предпринимателями мы охотно делимся своим опытом и
            помогаем открывать фирмы за границей. Оказываем помощь в построении
            бизнес-процессов компаний действующих на европейском рынке и
            обеспечиваем юридическое сопровождение бизнеса за границей. Мы
            готовы оказать консультации и содействие в вопросах, касающихся
            получения вида на жительство в Европе и постоянного места жительства
            в странах ЕС, оформления гражданства стран Евросоюза, покупки и
            продажи недвижимости.
          </p>
        </div>
        <div>
          <h2>Что нас отличает</h2>
          <p>
            В первую очередь — опыт. Учредители, консультанты и партнеры
            InterDialogue Business — бизнесмены с успешным многолетним опытом.
            Отличное знание законодательства европейских государств, рынков и
            тенденций позволяют нам оказывать услуги по регистрации компаний и
            покупке готового бизнеса с максимальной эффективностью, в сжатые
            сроки и в полном соответствии индивидуальным требованиям заказчика.
          </p>
        </div>
        <div>
          <h2>С нами работают лучшие</h2>
          <p>
            Мы поможем сформировать максимально эффективную команду. Мы можем
            проанализировать потенциал, выявить риски и повысить качество
            выполняемых задач, как отдельных сотрудников, так и групп. Мы
            предоставим деловых партнеров с инвестициями - франчайзинг - для
            отечественных и зарубежных систем франчайзинга.
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;
