import React from 'react';
import Dictionary from '../dictionary';


const sendEmail = () => {
    window.location = `mailto:${Dictionary.eventsEmail}?subject=I'd like to book an event at the Deacon`;
}

const TopNav = ({ handleScroll }) => (
    <div className='deacon__top-nav'>
        <button className='deacon__top-nav-option' onClick={() => handleScroll('#about')}>ABOUT</button>
        <button className='deacon__top-nav-option' onClick={() => handleScroll('#map')}>NEIGHBORHOOD</button>
        <div className='deacon__top-nav-option-link-container'>
                <a target="_blank" rel="noopener noreferrer" className='deacon__top-nav-option' href='https://docs.google.com/forms/d/e/1FAIpQLSewpxRgFBUVAKqkErC_6EQ8ffaYc77SDzf9K7SEceXA5CeZ-w/viewform?vc=0&c=0&w=1'>EVENTS</a>
        </div>
        <button className='deacon__top-nav-option' onClick={() => handleScroll('#contact')}>CONTACT</button>
        <a
            className='deacon__top-nav-book-now'
            href={`mailto:${Dictionary.bookingEmail}?subject=I'd like to book the Deacon`}
        >
            <span className="button-text">BOOK<br/>NOW</span>
        </a>
    </div>
);

export default TopNav;
