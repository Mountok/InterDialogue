import { t } from "i18next";
import React from "react";

const PersonalSearch = () => {
  return (
    <main className="rule_services">
      <div className="rule_s_header">
        <h2>{t("service_p_4_1")}</h2>
        <p>
          <i>
            {t("service_p_4_2")}
          </i>
        </p>
      </div>
      <div className="rule_s_content">
        <p>
          <b>
            {t("service_p_4_3")}
          </b>{" "}
          <br /> <br />
          {t("service_p_4_4")}
          <br /> <br />
          {t("service_p_4_5")} <br /> <br />
          {t("service_p_4_6")}
        </p>{" "}
        <br />
        {/* img */}
        <p className="bg_color">{t("service_p_4_7")}:</p>
        <ul>
          <li>{t("service_p_4_8")}</li>
          <li>{t("service_p_4_9")}</li>
          <li>{t("service_p_4_10")}ч</li>
          <li>{t("service_p_4_11")}</li>
          <li>
            {t("service_p_4_12")}
          </li>
          <li>{t("service_p_4_13")}</li>
          <li>
            {t("service_p_4_14")}
          </li>
        </ul>
      </div>
    </main>
  );
};

export default PersonalSearch;
