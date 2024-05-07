import { t } from "i18next";
import React, { useEffect } from "react";

const Ypravlencheskiy = () => {
  useEffect(()=>{
    window.scrollTo({top:0})
  },[])
  return (
    <main className="rule_services">
      <div className="rule_s_header">
        <h2>{t("service_p_3_1")}</h2>
        <p>
          <i>
            {t("service_p_3_2")}
          </i>
        </p>
      </div>
      <div className="rule_s_content">
        <p>
          <b>
            {t("service_p_3_3")}
          </b>{" "}
          <br /> <br />
          {t("service_p_3_4")}
        </p>{" "}
        <br />
        {/* img */}
        <p className="bg_color">
          {t("service_p_3_5")}
        </p>
        <ul>
          <li>
            {t("service_p_3_6")}
          </li>
          <li>
            {t("service_p_3_7")}
          </li>
          <li>
            {t("service_p_3_8")}
          </li>
          <li>
            {t("service_p_3_9")}
          </li>
        </ul>
        <p>
          {t("service_p_3_10")}<br />{" "}
          <br />
          {t("service_p_3_11")}<br /> <br />{" "}
          {t("service_p_3_12")} <br /> <br />{" "}
          {t("service_p_3_13")}
        </p>
      </div>
    </main>
  );
};

export default Ypravlencheskiy;
