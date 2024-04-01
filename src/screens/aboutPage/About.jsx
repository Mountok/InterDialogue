import React from "react";
import "./AboutStyle.css";
import { t } from "i18next";
const About = () => {
  return (
    <main className="main">

      <section className="about_present">
        <p>
          {t("about_us_present_h")}
        </p>
        <p>{t("about_us_present_p")}</p>
        <div className="card_item">
          <div className="card_image"></div>
          <div className="card_info">
            <p>{t("about_us_present_name")}</p>
            <p>{t("about_us_present_role")}</p>
          </div>
        </div>
      </section>

      <section className="about_us">
        <div>
          <h2>{t("about_us_section_1_h")}</h2>
          <p>
          {t("about_us_section_1_p")}
          </p>
        </div>
        <div>
          <h2>{t("about_us_section_2_h")}</h2>
          <p>
          {t("about_us_section_2_p")}
          </p>
        </div>
        <div>
          <section className="about_present_2"></section>
          <h2>{t("about_us_section_3_h")}</h2>
          <p>
          {t("about_us_section_3_p")}
          </p>
          <h2>
          {t("about_us_section_4_h")}
          </h2>
          <p>
          {t("about_us_section_4_p")}
          </p>
          <section className="about_present_4"></section>
          <h2>
          {t("about_us_section_5_h")}
          </h2>
          <p>
          {t("about_us_section_5_p")}
          </p>
          <section className="about_present_3"></section>
          <h2>{t("about_us_section_6_h")}</h2>
          <p>
          {t("about_us_section_6_p")}
          </p>
        </div>

      </section>
    </main>
  );
};

export default About;
