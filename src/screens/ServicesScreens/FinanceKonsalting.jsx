import React, { useEffect } from "react";
import "./ruleServices.css"
import { t } from "i18next";
export const FinanceKonsalting = () => {
  useEffect(()=>{
    window.scrollTo({top:0})
  },[])
  return (
    <main className="rule_services">
      <div className="rule_s_header">
        <h2>{t("service_p_2_1")}</h2>
        <p>
          <i>
            {t("service_p_2_2")}
          </i>
        </p>
      </div>
      <div className="rule_s_content">
        <p>
          <b>
            {t("service_p_2_3")}
          </b>{" "}
          <br /> <br />
          {t("service_p_2_4")}
          <br /> <br />
          {t("service_p_2_5")}
        </p>{" "}
        <br />
        {/* img */}
        <p className="bg_color">
          {t("service_p_2_6")}
        </p>
        <p>
          {t("service_p_2_7")} <br /> <br />
          <b className="bg_color">{t("service_p_2_8")}</b> <br /> {t("service_p_2_9")} <br /> <br />{t("service_p_2_1")}
          <br /> <br />
          <b className="bg_color">
            {t("service_p_2_10")}
          </b> <br />
          {t("service_p_2_11")}
          <ul>
            <li>{t("service_p_2_12")}</li>
            <li>
              {t("service_p_2_13")}
            </li>
            <li>
              {t("service_p_2_14")}
            </li>
            <li>
              {t("service_p_2_15")}
            </li>
          </ul>
          <br />
          <b className="bg_color">{t("service_p_2_17")}</b> <br />
          {t("service_p_2_18")} <br /> <br />
          <b className="bg_color"> {t("service_p_2_19")} </b> <br /> {t("service_p_2_20")}. <br /> <br />
          {t("service_p_2_21")} <br /> <br /> {t("service_p_2_22")}
          <ul>
            <li>
              {t("service_p_2_23")}
            </li>
            <li>
              {t("service_p_2_24")}
            </li>
            <li>{t("service_p_2_25")}</li>
            <li>
              {t("service_p_2_26")}
            </li>
          </ul>
        </p>
      </div>
    </main>
  );
};
