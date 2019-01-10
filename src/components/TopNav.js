import React from 'react';
const TopNav = ({ handleScroll }) => (
    <div className='deacon__top-nav'>
        <button className='deacon__top-nav-option' onClick={() => handleScroll('#about')}>ABOUT</button>
        <button className='deacon__top-nav-option' onClick={() => handleScroll('#about')}>CULTURE</button>
        <button className='deacon__top-nav-option' onClick={() => handleScroll('#about')}>CONTACT</button>
        <a
            className='deacon__top-nav-book-now'
            href='https://www.google.com'
            target="_blank"
            rel='noopener noreferrer'
        >
            BOOK<br/>NOW
        </a>
    </div>
);

export default TopNav;
