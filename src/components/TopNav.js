import React from "react";

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
            <a className="deacon__top-nav-option" href="/events">
                EVENTS
            </a>
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
