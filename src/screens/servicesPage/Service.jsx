import React from "react";
import "./ServiceStyle.css";
import { GoLaw } from "react-icons/go";
import { FaPeopleGroup } from "react-icons/fa6";
import { BsCashCoin } from "react-icons/bs";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { GrAnalytics } from "react-icons/gr";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { LiaNewspaperSolid } from "react-icons/lia";
import { IoPersonAddSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";


const Service = () => {
  const navigate = useNavigate()
  return (
    <main className="main">
      <section className="service_presentation">
        <div className="title">
          <p>Наши услуги</p>
          <p>
          Добиться эффективной организации своего бизнеса вы можете при помощи наших специалистов, 
          которые оказывают поддержку во всех сложных вопросах.
          </p>
        </div>
      </section>
      <section className="service_cards">
        <div className="service_item">
          <div onClick={()=>navigate("/services/1")} className="service_item_info">
            <p>Правовые услуги</p>
            <p>Правовое обеспечение деятельности предприятий, юридическое сопровождение сделок, разработка и составление контрактов, претензий, исков и жалоб в суд, консультации по правовым вопросам.</p>
          </div>
          <div className="service_card_img">
            <GoLaw className="service_card_img_logo"/>
          </div>
        </div>
        <div className="service_item">
          <div onClick={()=>navigate("/services/2")} className="service_item_info">
            <p>Кадровый консталтинг</p>
            <p>
            Оценка кадрового потенциала, оптимизация технологий управления персоналом и системы оплаты труда, разработка и реализация системы обучения персонала.
            </p>
          </div>
          <div className="service_card_img">
            <FaPeopleGroup className="service_card_img_logo"/>
          </div>
        </div>
        <div className="service_item">
          <div onClick={()=>navigate("/services/3")} className="service_item_info">
            <p>Финансовый консалтинг</p>
            <p>Создание финансового плана и плана денежных потоков, улучшение ликвидности и платежеспособности, управление дебиторской задолженностью, контроль над расходами.</p>
          </div>
          <div className="service_card_img">
            <BsCashCoin className="service_card_img_logo"/>
          </div>
        </div>
        <div className="service_item">
          <div onClick={()=>navigate("/services/4")} className="service_item_info">
            <p>Привлечение финансирования</p>
            <p>Поиск и анализ источников финансирования, наилучшим образом отвечающие стратегии и особенностям вашего бизнеса. Подготовка инвестиционной и кредитной документации.</p>
          </div>
          <div className="service_card_img">
            <FaHandHoldingDollar className="service_card_img_logo"/>
          </div>
        </div>
        <div className="service_item">
          <div  onClick={()=>navigate("/services/5")} className="service_item_info">
            <p>Управленческий консалтинг</p>
            <p>Комплекс консультационных услуг, позволяющий повысить эффективность деятельности компании на основе внедрения передовых технологий управления бизнесом.</p>
          </div>
          <div className="service_card_img">
            <IoPersonAddSharp className="service_card_img_logo"/>
          </div>
        </div>
        <div className="service_item">
          <div onClick={()=>navigate("/services/6")} className="service_item_info">
            <p>Управление портфелями</p>
            <p>Процесс управления инвестиционным портфелем направлен на сохранение основных инвестиционных качеств портфеля и тех свойств, которые соответствуют интересам держателя.</p>
          </div>
          <div className="service_card_img">
            <GrAnalytics className="service_card_img_logo"/>
          </div>
        </div>
        <div className="service_item">
          <div onClick={()=>navigate("/services/7")} className="service_item_info">
            <p>Поиск персонала в Европе</p>
            <p>Услуги по подбору кадров в европейских странах и консалтингу в сфере кадрового обеспечения. В том числе прямой поиск высшего руководства и уникальных специалистов.</p>
          </div>
          <div className="service_card_img">
            <BsFillPersonVcardFill className="service_card_img_logo"/>
          </div>
        </div>
        <div className="service_item">
          <div onClick={()=>navigate("/services/8")} className="service_item_info">
            <p>Регистрация фирм в Европе</p>
            <p>Регистрация компаний в различных странах ЕС. Создание холдинговых структур и трастов, создание юридического адреса и обеспечение полноценной бизнес-иммиграции и бизнес—администрирования.</p>
          </div>
          <div className="service_card_img">
            <LiaNewspaperSolid className="service_card_img_logo"/>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Service;
