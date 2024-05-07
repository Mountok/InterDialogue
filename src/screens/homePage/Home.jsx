import React, { useEffect, useState } from "react";
import "./HomeStyle.css";
import { useTranslation } from "react-i18next";
const Home = () => {
  const { t, i18n} = useTranslation()
  useEffect(()=>{
    console.log(i18n.language)
  },[])
  const isMobile = window.matchMedia("(max-width: 414px)").matches;

  return (
    <main className="main">
      <section className={`presentation`}>
        <div className="slide">
          <img className="s_image" src="/images/modern_city.jpeg" alt="#" />
          <img className="s_image" src="/images/modern_office.jpg" alt="#" />
          <img className="s_image" src="/images/avstriya.jpg" alt="#" />
          <img className="s_image" src="/images/germany.jpeg" alt="#" />
          <img className="s_image" src="/images/Feeney.jpeg" alt="" />
          <img className="s_image" src="/images/arc-de-triomphe.jpeg" alt="" />

        </div>
        <div className="title">
          {!isMobile ? <p>InterDialog</p> : <div className="title_image"></div>}

          <p>
            {t("home_present_text")}
          </p>
        </div>
      </section>
      <section className="services">
        <div className="services_blocks">
          <div className="service">
            <img src="/svgs/consulting.svg" alt="" />
            <p className="service_title">
              {t("home_service_1_h")}
            </p>
            <p className="service_text">
              {t("home_service_1_p")}
            </p>
          </div>
          <div className="service">
            <img src="/svgs/audit.svg" alt="" />
            <p className="service_title">{t("home_service_2_h")}</p>
            <p className="service_text">
              {t("home_service_2_p")}
            </p>
          </div>
          <div className="service">
            <img src="/svgs/business.svg" alt="" />
            <p className="service_title">{t("home_service_3_h")}</p>
            <p className="service_text">
              {t("home_service_3_p")}
            </p>
          </div>
          <div className="service">
            <img src="/svgs/investment.svg" alt="" />
            <p className="service_title">{t("home_service_4_h")}</p>
            <p className="service_text">
              {t("home_service_4_p")}
            </p>
          </div>
        </div>
      </section>
      <section className="about">
        <div className="about_block">
          <div className="about_content">
            {i18n.language == "en" ? (
              <iframe 
              className="about_video"
              src="https://www.youtube.com/embed/qe1oyMmy3dI?si=qqxb3AZTW_mIpIr6" 
              title="InterDialog Business" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerpolicy="strict-origin-when-cross-origin" 
              allowfullscreen></iframe>
            ) : (
              <iframe
                className="about_video"
                src="https://player.vimeo.com/video/146428873?h=10b961b1be"
                width="640"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen

              ></iframe>
            )}

          </div>

          <div className="about_content">
            <p>
              {t("home_about_content_1")}

            </p>
            <p>
              {t("home_about_content_2")}


            </p>
          </div>


        </div>
      </section>
    </main>
  );
};
export default Home;
