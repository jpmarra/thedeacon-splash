import React from 'react';
const TopNav = ({ handleScroll }) => (
    <div className='deacon__top-nav'>
        <button onClick={() => handleScroll('#about')}>About</button>
        <a href='#'>Culture</a>
        <a href='#'>Contact</a>
        <button>Book Now</button>
    </div>
);

export default TopNav;
