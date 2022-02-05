import React from "react";
import { Link } from "react-router-dom";
import EventForm from "./components/EventForm";
import { ReactComponent as Logo } from "./assets/icons/Logo-Hor-Large.svg";
import Footer from "./components/Footer";
import { Helmet } from "react-helmet";

export const Events = () => {
    React.useEffect(() => {
        const formRoot = document.getElementById("form-root");
        const script = document.createElement("script");
        script.src =
            "https://api.tripleseat.com/v1/leads/ts_script.js?lead_form_id=22323&public_key=f5ddd67014eacb646e88e06bb8f586ebc5986a0d&inline_form=true";
        formRoot.appendChild(script);
    }, []);
    return (
        <>
            <Helmet>
                <script src="https://www.google.com/recaptcha/api.js"></script>
            </Helmet>
            <div className="events-page">
                <Link to="/" className="events-page__link">
                    <Logo className="events-page__logo" />
                </Link>
                <div className="events-page__container">
                    <div className="events-page__form">
                        <h1 className="events-page__form--header">
                            Event Inquiry
                        </h1>
                        <div className="events-page__form--desc">
                            To request an event, please fill out the following
                            form.
                        </div>
                        <div id="form-root" />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Events;
