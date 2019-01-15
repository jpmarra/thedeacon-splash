import React from 'react';
import About1 from '../assets/images/Deacon-About-01.jpg';
import About2 from '../assets/images/Deacon-About-02.jpg';
import Dictionary from '../dictionary';

const About = () => (
    <div id='about' className='deacon-about'>
        <div className='deacon-about__container'>
            <div className='deacon-about__images'>
                <img className='deacon-about__images-left'src={About1} alt='furniture plans' />
                <img src={About2} alt='blueprints' />
            </div>
            <div className='deacon-about__copy'>
                <div className='deacon-about__copy-description'>
                    <div className='deacon-about__copy-description-title'>
                        {Dictionary.aboutTitle}
                    </div>
                    <div className='deacon-about__copy-description-body'>
                        {Dictionary.about}
                    </div>
                    <button className="deacon-about__button" onClick={() => this.props.handleScroll('#about')}>LEARN MORE</button>
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
