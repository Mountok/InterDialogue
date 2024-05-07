import { t } from "i18next";
import React, { useEffect } from "react";

const Finansirovanie = () => {
  useEffect(()=>{
    window.scrollTo({top:0})
  },[])
  return (
    <main className="rule_services">
      <div className="rule_s_header">
        <h2>{t("service_p_6_1")}</h2>
        <p>
          <i>
            {t("service_p_6_2")}
          </i>
        </p>
      </div>
      <div className="rule_s_content">
        <p>
          <b>
            {t("service_p_6_3")}
          </b>{" "}
          <br /> <br />
          {t("service_p_6_4")}
          <br /> <br />
          {t("service_p_6_5")} <br /> <br />{t("service_p_6_6")}
        </p>{" "}
        <br />
        {/* img */}
        <p className="bg_color">{t("service_p_6_7")}</p>
        <ul>
          <li>
          {t("service_p_6_8")}
          </li>
          <li>
          {t("service_p_6_9")}
          </li>
          <li>
          {t("service_p_6_10")}
          </li>
          <li>{t("service_p_6_11")}</li>
          <li>
          {t("service_p_6_12")}
          </li>
          <li>
          {t("service_p_6_13")}
          </li>
          <li>{t("service_p_6_14")}</li>
        </ul>
        <p>
        {t("service_p_6_15")}
        </p>
      </div>
    </main>
  );
};

export default Finansirovanie;
