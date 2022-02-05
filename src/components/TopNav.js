import React from "react";
import { Link } from "react-router-dom";

const TopNav = ({ handleScroll }) => (
    <div className="deacon__top-nav">
        <button
            className="deacon__top-nav-option"
            onClick={() => handleScroll("#about")}
        >
            ABOUT
        </button>
        <button
            className="deacon__top-nav-option"
            onClick={() => handleScroll("#map")}
        >
            NEIGHBORHOOD
        </button>
        <div className="deacon__top-nav-option-link-container">
            <Link className="deacon__top-nav-option" to="/events">
                EVENTS
            </Link>
        </div>
        <button
            className="deacon__top-nav-option"
            onClick={() => handleScroll("#contact")}
        >
            CONTACT
        </button>
        <a
            className="deacon__top-nav-book-now"
            target="_blank"
            rel="noopener noreferrer"
            href="https://app.thebookingbutton.com/properties/thedeacondirect"
        >
            <span className="button-text">
                BOOK
                <br />
                NOW
            </span>
        </a>
    </div>
);

export default TopNav;
