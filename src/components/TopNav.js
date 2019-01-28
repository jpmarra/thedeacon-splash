import React from 'react';
import Dictionary from '../dictionary';

const TopNav = ({ handleScroll }) => (
    <div className='deacon__top-nav'>
        <button className='deacon__top-nav-option' onClick={() => handleScroll('#about')}>ABOUT</button>
        <button className='deacon__top-nav-option' onClick={() => handleScroll('#map')}>MAP</button>
        <button className='deacon__top-nav-option' onClick={() => handleScroll('#contact')}>CONTACT</button>
        <a
            className='deacon__top-nav-book-now'
            href={`mailto:${Dictionary.generalEmail}?subject=Booking Request`}
            target="_blank"
            rel='noopener noreferrer'
        >
            BOOK<br/>NOW
        </a>
    </div>
);

export default TopNav;
