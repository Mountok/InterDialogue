import { t } from "i18next";
import React from "react";

const Portfeli = () => {
  return (
    <main className="rule_services">
      <div className="rule_s_header">
        <h2>{t("service_p_7_1")}</h2>
        <p>
          <i>
            {t("service_p_7_2")}
          </i>
        </p>
      </div>
      <div className="rule_s_content">
        <p>
          <b>
            {t("service_p_7_3")}
          </b>{" "}
          <br /> <br />
          {t("service_p_7_4")}
          <br /> <br />
          {t("service_p_7_5")}{" "}
          <br /> <br />{t("service_p_7_6")}
        </p>{" "}
        <br />
        {/* img */}
        <p className="bg_color">{t("service_p_7_7")}</p>
        <ul>
          <li>
            {t("service_p_7_8")}
          </li>
          <li>
            {t("service_p_7_9")}
          </li>
          <li>
          {t("service_p_7_10")}
          </li>
          <li>
          {t("service_p_7_11")}
          </li>
          <li>
          {t("service_p_7_12")}
          </li>
          <li>
          {t("service_p_7_13")}
          </li>
        </ul>
        <p>
        {t("service_p_7_14")} <br /> <br />
        {t("service_p_7_15")}
        </p> <br />
        <p className="bg_color">
        {t("service_p_7_16")}
        </p>
        <p>
        {t("service_p_7_17")}
        </p>
        <ul>
          <li>
          {t("service_p_7_18")}
          </li>
          <li>
          {t("service_p_7_19")}
          </li>
          <li>
          {t("service_p_7_20")}
          </li>
          <li>
          {t("service_p_7_21")}
          </li>
          <li>
          {t("service_p_7_22")}
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Portfeli;
