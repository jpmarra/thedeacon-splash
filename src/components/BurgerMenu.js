import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import Dictionary from '../dictionary';
import { ReactComponent as Logo } from '../assets/icons/Logo-Hor-White.svg';


const BurgerMenu = (props) => (
    <Menu {...props} width={'100%'} right>
        <button className='deacon__burger-menu-item deacon__burger-menu-item-about' onClick={() => props.handleScroll('#about')}>ABOUT</button>
        <button className='deacon__burger-menu-item' onClick={() => props.handleScroll('#contact')}>CONTACT</button>
        <a
            className='deacon__burger-menu-button'
            href={`mailto:${Dictionary.bookingEmail}?subject=I'd like to book the Deacon`}
            target="_blank"
            rel='noopener noreferrer'
        >
            BOOK<br/>NOW
        </a>
        <div className='deacon__footer-info-module-social-icons'>
            <a href='https://www.google.com'>
                <i className='deacon__burger-menu-social-icon fab fa-facebook-f'></i>
            </a>
            <a href='https://www.google.com'>
                <i className='deacon__burger-menu-social-icon fab fa-twitter'></i>
            </a>
            <a href='https://www.google.com'>
                <i className='deacon__burger-menu-social-icon fab fa-instagram'></i>
            </a>
        </div>
        <Logo className='deacon__burger-menu-icon'/>
    </Menu>
);

export default BurgerMenu;
