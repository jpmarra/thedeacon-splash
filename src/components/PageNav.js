import React from 'react';
import { Link } from '@reach/router';
import classNames from 'classnames';
import { ReactComponent as Logo } from '../assets/icons/Logo-Hor-Large.svg';

const PageNav = ({ theme, active }) => {
    return (
        <div className={`page-nav page-nav--${theme}`}>
            <Link to="/"><Logo className="page-nav__logo" /></Link>
            <div className="page-nav__links">
                <Link className={classNames(`page-nav__links-link page-nav__links-link--${theme}`, {current: active === 'about' })} to="/#about">About</Link>
                <Link className={classNames(`page-nav__links-link page-nav__links-link--${theme}`, {current: active === 'gallery' })} to="/gallery">Gallery</Link>
                <a className={`page-nav__links-link page-nav__links-link--${theme}`} target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSewpxRgFBUVAKqkErC_6EQ8ffaYc77SDzf9K7SEceXA5CeZ-w/viewform?vc=0&c=0&w=1">Events</a>
                <Link className={classNames(`page-nav__links-link page-nav__links-link--${theme}`, {current: active === 'contact' })} to="/#contact">Contact</Link>
                <a
                    className={`page-nav__links-link page-nav__links-link--${theme}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://app.thebookingbutton.com/properties/thedeacondirect'
                >
                    Book Now
                </a>
            </div>
        </div>
    )
}

export default PageNav
