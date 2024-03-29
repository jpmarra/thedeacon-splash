import React from "react";
import Dictionary from "../dictionary";
import MailchimpForm from "./MailchimpForm";
import MailchimpUnsubscribe from "react-mailchimp-subscribe";
const url =
    "https://thedeaconphl.us20.list-manage.com/subscribe/post?u=80a58941eed4bc193dbb23b3d&amp;id=2520920791";

const Contact = () => (
    <div id="contact" className="deacon__contact">
        <div className="deacon__contact-container">
            <div className="deacon__contact-header">
                {Dictionary.contact.header}
            </div>
            <div className="deacon__contact-info-container">
                <div className="deacon__contact-info-location">
                    <div className="deacon__contact-info-location-title">
                        {Dictionary.contact.locationTitle}
                    </div>
                    <div className="deacon__contact-info-location-street">
                        {Dictionary.contact.locationStreet}
                    </div>
                    <div className="deacon__contact-info-location-locale">
                        {Dictionary.contact.locationLocale}
                    </div>
                </div>
                <div className="deacon__contact-info-general">
                    <div className="deacon__contact-info-general-title">
                        {Dictionary.contact.generalTitle}
                    </div>
                    <div className="deacon__contact-info-body">
                        <div>{Dictionary.generalEmail}</div>
                        <div>{Dictionary.eventsEmail}</div>
                    </div>
                </div>
            </div>
            <a
                className="deacon__contact-button"
                href="https://my.matterport.com/show/?m=7HCKRivQxgY"
            >
                <span className="button-text">VIRTUAL TOUR</span>
            </a>
            <div className="deacon__contact-newsletter-container">
                <div className="deacon__contact-newsletter-text">
                    <div className="deacon__contact-newsletter-text-title">
                        {Dictionary.contact.newsletterTitle}
                    </div>
                    <div className="deacon__contact-newsletter-text-copy">
                        {Dictionary.contact.newsletterCopy}
                    </div>
                </div>
                <MailchimpUnsubscribe
                    url={url}
                    render={({ subscribe, status, message }) => (
                        <MailchimpForm
                            onValidated={(formData) => subscribe(formData)}
                            status={status}
                            message={message}
                        />
                    )}
                />
            </div>
        </div>
    </div>
);

export default Contact;
