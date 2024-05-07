import { t } from "i18next";
import React, { useEffect } from "react";

const FirmRegist = () => {
  useEffect(()=>{
    window.scrollTo({top:0})
  },[])
  return (
    <main className="rule_services">
      <div className="rule_s_header">
        <h2>{t("service_p_8_1")}</h2>
        <p>
          <i>
          {t("service_p_8_2")}
          </i>
        </p>
      </div>
      <div className="rule_s_content">
        <p>
        {t("service_p_8_3")}
          <br /> <br />{t("service_p_8_4")}
        </p>{" "}
        <br />
        {/* img */}
        <p className="bg_color">{t("service_p_8_5")}</p>
        <ul>
          <li>{t("service_p_8_6")}</li>
          <li>{t("service_p_8_7")}</li>
          <li>{t("service_p_8_8")}</li>
          <li>{t("service_p_8_9")}</li>
          <li>{t("service_p_8_10")}</li>
          <li>
          {t("service_p_8_11")}
          </li>
        </ul>
        <p>
        {t("service_p_8_12")} <br /> <br />
        {t("service_p_8_13")}
        </p>
      </div>
    </main>
  );
};

export default FirmRegist;
