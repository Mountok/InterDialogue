import React from "react";
import "./ruleServices.css"
import { t } from "i18next";
const KonsaltingKadrov = () => {
  return (
    <main className="rule_services">
      <div className="rule_s_header">
        <h2>{t("service_p_5_1")}</h2>
        <p>
          <i>
            {t("service_p_5_2")}
          </i>
        </p>
      </div>
      <div className="rule_s_content">
        <p>
          <b>
            {t("service_p_5_3")}
          </b>{" "}
          <br /> <br />
          {t("service_p_5_4")}
          <br /> <br />
          {t("service_p_5_5")} <br /> <br />
          {t("service_p_5_6")}
        </p>{" "}
        <br />
        {/* img */}
        <p className="bg_color">{t("service_p_5_7")}</p>
        <ul>
          <li>{t("service_p_5_8")}</li>
          <li>
            {t("service_p_5_9")}
          </li>
          <li>{t("service_p_5_10")}</li>
          <li>
            {t("service_p_5_11")}
          </li>
          <li>{t("service_p_5_12")}</li>
          <li>
            {t("service_p_5_13")}
          </li>
          <li>
            {t("service_p_5_14")}
          </li>
          <li>
            {t("service_p_5_15")}
          </li>
          <li>
            {t("service_p_5_16")}
          </li>

        </ul>

      </div>
    </main>
  );
};

export default KonsaltingKadrov;
