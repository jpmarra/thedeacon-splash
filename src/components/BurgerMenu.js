import React from "react";
import { slide as Menu } from "react-burger-menu";
import { ReactComponent as Logo } from "../assets/icons/Logo-Hor-White.svg";

const BurgerMenu = (props) => (
    <Menu {...props} width={"100%"} right>
        <button
            className="deacon__burger-menu-item deacon__burger-menu-item-about"
            onClick={() => props.handleScroll("#about")}
        >
            ABOUT
        </button>
        <button
            className="deacon__burger-menu-item"
            onClick={() => props.handleScroll("#contact")}
        >
            CONTACT
        </button>
        <div className="deacon__burger-menu-item deacon__burger-menu-item-container">
            <a href="/events" className="deacon__burger-menu-item">
                EVENTS
            </a>
        </div>
        <a
            className="deacon__burger-menu-button"
            target="_blank"
            rel="noopener noreferrer"
            href="https://app.thebookingbutton.com/properties/thedeacondirect"
        >
            BOOK
            <br />
            NOW
        </a>
        <div className="deacon__footer-info-module-social-icons">
            <a href="https://www.facebook.com/thedeaconphl">
                <i className="deacon__burger-menu-social-icon fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/thedeaconphl/">
                <i className="deacon__burger-menu-social-icon fab fa-instagram"></i>
            </a>
        </div>
        <Logo className="deacon__burger-menu-icon" />
    </Menu>
);

export default BurgerMenu;
