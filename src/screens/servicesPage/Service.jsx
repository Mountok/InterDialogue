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
import { t } from "i18next";


const Service = () => {
  const navigate = useNavigate()
  return (
    <main className="main">
      <section className="service_presentation">
        <div className="title">
          <p>{t("services_present_h")}</p>
          <p> {t("services_present_p")}
          </p>
        </div>
      </section>
      <section className="service_cards">
        <div className="service_item">
          <div onClick={() => navigate("/services/1")} className="service_item_info">
            <p>{t("services_item_1_h")}</p>
            <p>{t("services_item_1_p")}</p>
          </div>
          <div className="service_card_img">
            <GoLaw className="service_card_img_logo" />
          </div>
        </div>
        <div className="service_item">
          <div onClick={() => navigate("/services/2")} className="service_item_info">
            <p>{t("services_item_2_h")}</p>
            <p>
              {t("services_item_2_p")}
            </p>
          </div>
          <div className="service_card_img">
            <FaPeopleGroup className="service_card_img_logo" />
          </div>
        </div>
        <div className="service_item">
          <div onClick={() => navigate("/services/3")} className="service_item_info">
            <p>{t("services_item_3_h")}</p>
            <p>{t("services_item_3_p")}</p>
          </div>
          <div className="service_card_img">
            <BsCashCoin className="service_card_img_logo" />
          </div>
        </div>
        <div className="service_item">
          <div onClick={() => navigate("/services/4")} className="service_item_info">
            <p>{t("services_item_4_h")}</p>
            <p>{t("services_item_4_p")}</p>
          </div>
          <div className="service_card_img">
            <FaHandHoldingDollar className="service_card_img_logo" />
          </div>
        </div>
        <div className="service_item">
          <div onClick={() => navigate("/services/5")} className="service_item_info">
            <p>{t("services_item_5_h")}</p>
            <p>{t("services_item_5_p")}</p>
          </div>
          <div className="service_card_img">
            <IoPersonAddSharp className="service_card_img_logo" />
          </div>
        </div>
        <div className="service_item">
          <div onClick={() => navigate("/services/6")} className="service_item_info">
            <p>{t("services_item_6_h")}</p>
            <p>{t("services_item_6_p")}</p>
          </div>
          <div className="service_card_img">
            <GrAnalytics className="service_card_img_logo" />
          </div>
        </div>
        <div className="service_item">
          <div onClick={() => navigate("/services/7")} className="service_item_info">
            <p>{t("services_item_7_h")}</p>
            <p>{t("services_item_7_p")}</p>
          </div>
          <div className="service_card_img">
            <BsFillPersonVcardFill className="service_card_img_logo" />
          </div>
        </div>
        <div className="service_item">
          <div onClick={() => navigate("/services/8")} className="service_item_info">
            <p>{t("services_item_8_h")}</p>
            <p>{t("services_item_8_p")}</p>
          </div>
          <div className="service_card_img">
            <LiaNewspaperSolid className="service_card_img_logo" />
          </div>
        </div>
      </section>

    </main>
  );
};

export default Service;
