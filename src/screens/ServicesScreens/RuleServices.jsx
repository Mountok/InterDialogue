import React, { useEffect } from "react";
import "./ruleServices.css";
import { t } from "i18next";
const RuleServices = () => {
  useEffect(()=>{
    window.scrollTo({top:0})
  },[])
  return (
    <main className="rule_services">
      <div className="rule_s_header">
        <h2>{t("service_p_1_1")}</h2>
        <p>
          <i>
            {t("service_p_1_2")}
          </i>
        </p>
      </div>
      <div className="rule_s_content">
        <p>
          <b>
            {t("service_p_1_3")}
          </b>{" "}
          <br /> <br />
          {t("service_p_1_4")}
          <br /> <br />
          {t("service_p_1_5")} <br /> <br />
          <b>
            {" "}
            {t("service_p_1_6")}{" "}
          </b>{" "}
          {t("service_p_1_7")}
        </p>{" "}
        <br />
        {/* img */}
        <p className="bg_color">{t("service_p_1_8")}</p>
        <ul>
          <li>
          {t("service_p_1_9")}
          </li>
          <li>
          {t("service_p_1_10")}
          </li>
          <li>
          {t("service_p_1_11")}
          </li>
          <li>
          {t("service_p_1_12")}
          </li>
          <li>{t("service_p_1_13")}</li>
          <li>
          {t("service_p_1_14")}
          </li>
          <li>
          {t("service_p_1_15")}
          </li>
          <li>
          {t("service_p_1_16")}
          </li>
          <li>
          {t("service_p_1_17")}
          </li>
          <li>
          {t("service_p_1_18")}
          </li>
          <li>
          {t("service_p_1_19")}
          </li>
          <li>
          {t("service_p_1_20")}          </li>
          <li>
          {t("service_p_1_21")}
          </li>
          <li>
          {t("service_p_1_22")}
          </li>
        </ul>
        <br />
        <p className="bg_color">
        {t("service_p_1_23")}
        </p>
        <ul>
          <li>
          {t("service_p_1_24")}
          </li>
          <li>
          {t("service_p_1_25")}
          </li>
          <li>
          {t("service_p_1_26")}
          </li>
          <li>{t("service_p_1_27")}</li>
          <li>
          {t("service_p_1_28")}
          </li>
        </ul>
        <br />
        <p className="bg_color">{t("service_p_1_29")}</p>
        <ul>
          <li>{t("service_p_1_30")}</li>
          <li>{t("service_p_1_31")}</li>
          <li>{t("service_p_1_32")}</li>
          <li>{t("service_p_1_33")}</li>
          <li>{t("service_p_1_34")}</li>
          <li>{t("service_p_1_35")}</li>
          <li>{t("service_p_1_36")}</li>
        </ul>
        <br />
        <p>
        {t("service_p_1_37")}
        </p>
      </div>
    </main>
  );
};

export default RuleServices;
