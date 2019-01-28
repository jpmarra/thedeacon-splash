import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import Dictionary from '../dictionary';
import { ReactComponent as Logo } from '../assets/icons/Deacon-Footer_Logo-Large.svg';


const BurgerMenu = (props) => (
    <Menu {...props} width={'100%'} right>
        <button className='deacon__burger-menu-item' onClick={() => props.handleScroll('#about')}>ABOUT</button>
        <button className='deacon__burger-menu-item' onClick={() => props.handleScroll('#contact')}>CONTACT</button>
        <a
            className='deacon__burger-menu-button'
            href={`mailto:${Dictionary.generalEmail}?subject=Booking Request`}
            target="_blank"
            rel='noopener noreferrer'
        >
            <span>BOOK NOW</span>
        </a>
        <Logo />
    </Menu>
);

export default BurgerMenu;
