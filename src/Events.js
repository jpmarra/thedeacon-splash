import React from "react";
import { Link } from "react-router-dom";
import EventForm from "./components/EventForm";
import { ReactComponent as Logo } from "./assets/icons/Logo-Hor-Large.svg";
import Footer from "./components/Footer";

export const Events = () => {
    return (
        <div className="events-page">
            <Link to="/" className="events-page__link">
                <Logo className="events-page__logo" />
            </Link>
            <div className="events-page__container">
                <div className="events-page__form">
                    <h1 className="events-page__form--header">Event Inquiry</h1>
                    <div className="events-page__form--desc">
                        To request an event, please fill out the following form.
                    </div>
                    <EventForm />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Events;
