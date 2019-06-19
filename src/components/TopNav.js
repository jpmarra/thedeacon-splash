import React from 'react';
import { Link } from '@reach/router';

const TopNav = ({ handleScroll }) => (
    <div className='deacon__top-nav'>
        <a className='deacon__top-nav-option' onClick={() => handleScroll('#about')}>ABOUT</a>
        <Link className='deacon__top-nav-option' to="/gallery">GALLERY</Link>
        <a className='deacon__top-nav-option' onClick={() => handleScroll('#map')}>NEIGHBORHOOD</a>
        <a className='deacon__top-nav-option' target="_blank" rel="noopener noreferrer" className='deacon__top-nav-option' href='https://docs.google.com/forms/d/e/1FAIpQLSewpxRgFBUVAKqkErC_6EQ8ffaYc77SDzf9K7SEceXA5CeZ-w/viewform?vc=0&c=0&w=1'>EVENTS</a>
        <a className='deacon__top-nav-option' onClick={() => handleScroll('#contact')}>CONTACT</a>
        <a
            className='deacon__top-nav-book-now'
            target='_blank'
            rel='noopener noreferrer'
            href='https://app.thebookingbutton.com/properties/thedeacondirect'
        >
            <span className="button-text">BOOK<br/>NOW</span>
        </a>
    </div>
);

export default TopNav;
