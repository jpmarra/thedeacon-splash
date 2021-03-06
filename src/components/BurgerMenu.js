import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import Dictionary from '../dictionary';
import { ReactComponent as Logo } from '../assets/icons/Logo-Hor-White.svg';

const BurgerMenu = (props) => (
    <Menu {...props} width={'100%'} right>
        <button className='deacon__burger-menu-item deacon__burger-menu-item-about' onClick={() => props.handleScroll('#about')}>ABOUT</button>
        <button className='deacon__burger-menu-item' onClick={() => props.handleScroll('#contact')}>CONTACT</button>
        <div className='deacon__burger-menu-item deacon__burger-menu-item-container'>
            <a target="_blank" rel="noopener noreferrer" className='deacon__burger-menu-item' href='https://experiences.thedeaconphl.com'>EXPERIENCES</a>
        </div>
        <div className='deacon__burger-menu-item deacon__burger-menu-item-container'>
                <a target="_blank" rel="noopener noreferrer" className='deacon__burger-menu-item' href='https://docs.google.com/forms/d/e/1FAIpQLSewpxRgFBUVAKqkErC_6EQ8ffaYc77SDzf9K7SEceXA5CeZ-w/viewform?vc=0&c=0&w=1'>EVENTS</a>
        </div>
        <a
            className='deacon__burger-menu-button'
            target='_blank'
            rel='noopener noreferrer'
            href='https://app.thebookingbutton.com/properties/thedeacondirect'
        >
            BOOK<br/>NOW
        </a>
        <div className='deacon__footer-info-module-social-icons'>
            <a href='https://www.facebook.com/thedeaconphl'>
                <i className='deacon__burger-menu-social-icon fab fa-facebook-f'></i>
            </a>
            <a href='https://www.instagram.com/thedeaconphl/'>
                <i className='deacon__burger-menu-social-icon fab fa-instagram'></i>
            </a>
        </div>
        <Logo className='deacon__burger-menu-icon'/>
    </Menu>
);

export default BurgerMenu;
