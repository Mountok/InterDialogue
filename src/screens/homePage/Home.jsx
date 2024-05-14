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
          <img className="s_image" src="/images/image_country.jpg" alt="#" />
          <img className="s_image" src="/images/image_country (1).jpg" alt="#" />
          <img className="s_image" src="/images/image_country (2).jpg" alt="#" />
          <img className="s_image" src="/images/image_country (3).jpg" alt="#" />
          <img className="s_image" src="/images/image_country (4).jpg" alt="#" />
          <img className="s_image" src="/images/image_country (5).jpg" alt="#" />
          <img className="s_image" src="/images/image_country (6).jpg" alt="#" />
          <img className="s_image" src="/images/image_country (7).jpg" alt="#" />
          <img className="s_image" src="/images/image_country (8).jpg" alt="#" />
          <img className="s_image" src="/images/image_country (9).jpg" alt="#" />
          <img className="s_image" src="/images/image_country (10).jpg" alt="#" />
          <img className="s_image" src="/images/image_country (11).jpg" alt="#" />
          <img className="s_image" src="/images/image_country (12).jpg" alt="#" />
          <img className="s_image" src="/images/image_country (13).jpg" alt="#" />
          <img className="s_image" src="/images/image_country (14).jpg" alt="#" />
          <img className="s_image" src="/images/image_country (15).jpg" alt="#" />
          <img className="s_image" src="/images/image_country (16).jpg" alt="#" />
          <img className="s_image" src="/images/image_country (17).jpg" alt="#" />
          <img className="s_image" src="/images/image_country (18).jpg" alt="#" />
          <img className="s_image" src="/images/image_country (19).jpg" alt="#" />
          <img className="s_image" src="/images/image_country (20).jpg" alt="#" />
          <img className="s_image" src="/images/image_country (21).jpg" alt="#" />
          <img className="s_image" src="/images/image_country (22).jpg" alt="#" />
          <img className="s_image" src="/images/image_country (23).jpg" alt="#" />
          <img className="s_image" src="/images/image_country (24).jpg" alt="#" />


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
