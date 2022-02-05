import React from "react";
import { Link } from "react-router-dom";
import Dictionary from "../dictionary";
import { ReactComponent as Logo } from "../assets/icons/Deacon-Footer_Logo-Large.svg";

const Footer = () => (
    <div className="deacon__footer">
        {window.location.pathname !== "/events" && (
            <div className="deacon__footer-image-container">
                <img
                    className="deacon__footer-image"
                    alt="footer"
                    src={Dictionary.footer.image}
                />
            </div>
        )}
        <div className="deacon__footer-container">
            <Logo className="deacon__footer-logo" />
            <div className="deacon__footer-title">
                {Dictionary.footer.title}
            </div>
            <div className="deacon__footer-info-container">
                <div className="deacon__footer-info-module">
                    <div className="deacon__footer-info-module-title">
                        {Dictionary.contact.locationTitle}
                    </div>
                    <div className="deacon__footer-info-module-text">
                        {Dictionary.contact.locationStreet}
                    </div>
                    <div className="deacon__footer-info-module-text">
                        {Dictionary.contact.locationLocale}
                    </div>
                </div>
                <div className="deacon__footer-info-module deacon__footer-info-module-contact">
                    <div className="deacon__footer-info-module-title">
                        {Dictionary.footer.contactTitle}
                    </div>
                    <div className="deacon__footer-info-module-links">
                        <a
                            href={`mailto:${Dictionary.generalEmail}?subject=I'd like to learn more about the Deacon`}
                            className="deacon__footer-info-module-link"
                        >
                            {Dictionary.footer.contactGeneral}
                        </a>
                        <span className="deacon__footer-info-module-bullet" />
                        <Link
                            to="/events"
                            className="deacon__footer-info-module-link"
                        >
                            Events
                        </Link>
                    </div>
                </div>
                <div className="deacon__footer-info-module">
                    <div className="deacon__footer-info-module-title">
                        {Dictionary.footer.socialTitle}
                    </div>
                    <div className="deacon__footer-info-module-social-icons">
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.facebook.com/thedeaconphl"
                        >
                            <i className="deacon__footer-info-module-social-icon fab fa-facebook-f"></i>
                        </a>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.instagram.com/thedeaconphl/"
                        >
                            <i className="deacon__footer-info-module-social-icon fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="deacon__footer-note">
                <div className="deacon__footer-note-copyright">
                    &#169; {Dictionary.footer.copyright}
                </div>
                <div className="deacon__footer-note-credits">
                    <div>
                        Site Design by{" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://a-mcquiston.info/"
                        >
                            A. McQuiston
                        </a>
                    </div>
                    <div className="deacon__footer-note-credits-right">
                        Development by{" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="http://www.jpmarra.com"
                        >
                            JP Marra
                        </a>
                    </div>
                    <div className="deacon__footer-note-credits-right">
                        Photos by{" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.instagram.com/heidisbridge/"
                        >
                            @heidisbridge
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Footer;
