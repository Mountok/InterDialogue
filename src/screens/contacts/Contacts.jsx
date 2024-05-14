import React from "react";
import "./ContactsStyle.css";
import {t} from "i18next";
const Contacts = () => {
    return (
        <main className="main">
            <section className="contacts_presentation">
                <div className="title">
                    <p>{
                        t("contacts_present_h")
                    }</p>
                    <p> {
                        t("contacts_present_p")
                    } </p>
                </div>
            </section>
            <section className="contacts_list">
                <div>
                    <p>{
                        t("contacts_address")
                    }:</p>
                    <h3> {
                        t("footer_address")
                    } </h3>
                </div>
                <div>
                    <p>{
                        t("contacts_mobile")
                    }</p>
                    <h3>(+43) 664 568 01 55</h3>
                    <p>{
                        t("contacts_phone")
                    }</p>
                    <h3>+43 (1) 890 62 70</h3>
                </div>


                <div>
                    <p>{
                        t("contacts_email")
                    }:</p>
                    <h3>office@interdialogbusiness.com</h3>


                </div>
            </section>
            <section className="our_data">
                <div className="our_data_bg">
                    <ul>
                        <li>Firmenname: InterDialog Business GmbH</li>
                        <li>Firmenbuchnummer: 446025w</li>
                        <li>Firmengericht: Handelsgericht Wien</li>
                        <li>GLN (der öffentlichen Verwaltung): 9110022954838</li>
                        <li>Behörde gem. ECG (E-Commerce Gesetz): Magistratisches Bezirksamt des XVII. Bezirkes</li>
                        <li>Gegründet: 21.12.2015</li>
                        <li>ATU Nummer: ATU70872004</li>
                        <li>WKO Mitgliedsnummer: 882175</li>
                        <li>ERSTE BANK: InterDialog Business GmbH AT202011182788769200
                                                        BIC: GIBAATWWXXX</li>
                    </ul>
                    <p>Fachgruppe / Berufszweig</p>
                    <ul>
                        <li>LG Lebensmittelhandel: Großhandel mit Lebensmitteln</li>
                        <li>FG persönliche Dienstleiter: Sonstige Beauftragte, Berater, Bereitsteller, Informanten</li>
                    </ul>
                    <p>Berechtigugen aufrecht
                    </p>
                    <ul>
                        <li>Großhandel mit Lebensmitteln -- Handelsgewerbe mit Ausnahme der reglementierten Handelsgewerbe und Handelsagent</li>
                        <li>Sonstige Beauftrage, Berater -- Vermittlung von Werk- und Dienstleistungsverträgen an Befugte unter Ausschluss der Übernahme von Aufträgen im eigenen Namen und auf eigene Rechnung sowie ausgenommen der den Arbeitsvermittlern, Immobilientreuhändern, Reisebüros, Transportagenten, Spediteuren, Vermögensberatern, Versicherungsvermitteln und Wertpapiervermittlern vorbehaltenen Tätigkeiten</li>
                    </ul>
                    <ul>
                        <li>Postanschrift: 1170 Wien, Neuwaldeggerstraße 19-21/4, Tūr 5</li>
                    </ul>
                    <p>Kontaktdaten:
                    </p>
                    <ul>
                        <li>Mobile: (+43) 664 568 01 55</li>
                        <li>Email: office@interdialogbusiness.com
                            <br/>
                            https://www.interdialogbusiness.com</li>
                    </ul>
                </div>
            </section>
        </main>
    );
};

export default Contacts;
