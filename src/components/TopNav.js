import React from 'react';
import Dictionary from '../dictionary';
import { slide as Menu } from 'react-burger-menu';

const TopNav = ({ handleScroll }) => (
    <div>
    {window.innerWidth > 900 ?
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
    :
        null
    }
    </div>
);

export default TopNav;
