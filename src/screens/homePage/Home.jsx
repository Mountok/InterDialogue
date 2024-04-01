import React, { useState } from "react";
import "./HomeStyle.css";
import { t } from "i18next";
const Home = () => {
  let [imageNum, setImageNum] = useState(1);
  let [allNums, setAllNums] = useState([1, 2, 3, 4, 5, 6, 7]);
  // setInterval(() => {
  //   changePhoto();
  // }, 10000);

  const changePhoto = () => {
    if (allNums[imageNum + 1 - 1] == imageNum + 1) {
      setImageNum(imageNum + 1);
    } else {
      setImageNum(1);
    }
  };
  const isMobile = window.matchMedia("(max-width: 414px)").matches;
  console.log(isMobile);

  return (
    <main className="main">
      <section className={`presentation p_image_${imageNum}`}>
        <div className="title">
          {!isMobile ? <p>InterDialog</p>: <div className="title_image"></div>}
          
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
            <iframe
              className="about_video"
              src="https://player.vimeo.com/video/146428873?h=10b961b1be"
              width="640"
              height="360"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              
            ></iframe>
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
