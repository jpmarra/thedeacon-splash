import React from 'react';
import AboutSlider from './AboutSlider';
import About1 from '../assets/images/Deacon-About-01.jpg';
import About2 from '../assets/images/Deacon-About-02.jpg';
import Dictionary from '../dictionary';

const About = () => (
    <div id='about' className='deacon-about'>
        <div className='deacon-about__container'>
        {window.innerWidth > 901 ?
            <div className='deacon-about__images'>
                <img className='deacon-about__images-left'src={About1} alt='furniture plans' />
                <img className='deacon-about__images-right' src={About2} alt='blueprints' />
            </div>
        :
            <AboutSlider />
        }
            <div className='deacon-about__copy'>
                <div className='deacon-about__copy-description'>
                    <div className='deacon-about__copy-description-title'>
                        <span>{Dictionary.aboutTitle}</span>
                    </div>
                    <div className='deacon-about__copy-description-body'>
                        {Dictionary.about}
                    </div>
                    <a
                        className="deacon-about__button"
                        href={`mailto:${Dictionary.generalEmail}?subject=I'd like to learn more about the Deacon`}
                    >
                        <p>LEARN MORE</p>
                    </a>
                </div>
                <div className='deacon-about__copy-details'>
                    <div className='deacon-about__copy-details-container'>
                        <div className='deacon-about__copy-details-container-title'>
                            {Dictionary.roomsTitle}
                        </div>
                        <div className='deacon-about__copy-details-container-body'>
                            {Dictionary.rooms}
                        </div>
                    </div>
                    <div className='deacon-about__copy-details-container'>
                    <div className='deacon-about__copy-details-container-title'>
                        {Dictionary.spaceTitle}
                    </div>
                    <div className='deacon-about__copy-details-container-body'>
                        {Dictionary.space}
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default About;
