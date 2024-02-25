import React, { useState } from "react";
import "./HomeStyle.css";
const Home = () => {
  let [imageNum, setImageNum] = useState(1);
  let [allNums, setAllNums] = useState([1, 2, 3, 4, 5, 6, 7]);
  setInterval(() => {
    changePhoto();
  }, 10000);

  const changePhoto = () => {
    if (allNums[imageNum + 1 - 1] == imageNum + 1) {
      setImageNum(imageNum + 1);
    } else {
      setImageNum(1);
    }
  };

  return (
    <main className="main">
      <section className={`presentation p_image_${imageNum}`}>
        <div className="title">
          <p>InterDialogue</p>
          <p>
            Профессиональное консалтинговое агентство, основанное бизнесменами с
            <span> реальным</span> практическим опытом.
          </p>
        </div>
      </section>
      <section className="services">
        <div className="services_blocks">
          <div className="service">
            <img src="/svgs/consulting.svg" alt="" />
            <p className="service_title">Консалтинг</p>
            <p className="service_text">
              Проектный менеджмент и управление процессами. Инвестиционный,
              правовой, налоговый и кадровый консалтинг.
            </p>
          </div>
          <div className="service">
            <img src="/svgs/audit.svg" alt="" />
            <p className="service_title">Аудит</p>
            <p className="service_text">
              Анализ вашего бизнеса и выявление ключевых проблем: аудит системы
              управления, продаж и финансов.
            </p>
          </div>
          <div className="service">
            <img src="/svgs/business.svg" alt="" />
            <p className="service_title">Бизнес</p>
            <p className="service_text">
              Помощь в регистрации или приобретении бизнеса. Комплексное
              сопровождение деятельности на территории страны.
            </p>
          </div>
          <div className="service">
            <img src="/svgs/investment.svg" alt="" />
            <p className="service_title">Инвестиции</p>
            <p className="service_text">
              Изучение возможностей для выгодных и стабильных вариантов вложения
              средств, позволяющих сохранить и приумножить капитал.
            </p>
          </div>
        </div>
      </section>
      <section className="about">
        <div className="about_block">
          <div className="about_content">
            <iframe
              className="about_video"
              src="https://player.vimeo.com/video/146428873?h=10b961b1be"
              width="640"
              height="360"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>

          <div className="about_content">
            <p>
              Бизнес в Европе - это возможность для развития и роста.
              Европейский рынок предлагает широкие перспективы для инноваций,
              инвестиций и партнерств. Здесь важно быть в курсе последних
              тенденций и законодательства, чтобы использовать все преимущества
              и успешно развивать свой бизнес.
            </p>
            <p>
              Поэтому знание особенностей бизнеса в Европе и общее понимание
              местных реалий - ключевые факторы для успешной деятельности на
              этом перспективном рынке.
            </p>
          </div>

          <div className="about_content_2">
            <div className="about_content_2_block">
              <div className="about_content_2_block_header">
                <p>Почему именно мы?</p>
              </div>
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
export default Home;
