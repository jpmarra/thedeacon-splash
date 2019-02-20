import React from 'react';
import Dictionary from '../dictionary';


const sendEmail = () => {
    window.location = `mailto:${Dictionary.eventsEmail}?subject=I'd like to book the Deacon`;
}

const TopNav = ({ handleScroll }) => (
    <div className='deacon__top-nav'>
        <button className='deacon__top-nav-option' onClick={() => handleScroll('#about')}>ABOUT</button>
        <button className='deacon__top-nav-option' onClick={() => handleScroll('#map')}>NEIGHBORHOOD</button>
        <button className='deacon__top-nav-option' onClick={sendEmail}>EVENTS</button>
        <button className='deacon__top-nav-option' onClick={() => handleScroll('#contact')}>CONTACT</button>
        <a
            className='deacon__top-nav-book-now'
            href={`mailto:${Dictionary.bookingEmail}?subject=I'd like to book the Deacon`}
            target="_blank"
            rel='noopener noreferrer'
        >
            BOOK<br/>NOW
        </a>
    </div>
);

export default TopNav;
