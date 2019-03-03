import React from 'react';
import Dictionary from '../dictionary';
import { ReactComponent as Logo } from '../assets/icons/Deacon-Footer_Logo-Large.svg';

const Footer = () => (
    <div className='deacon__footer'>
        <div className='deacon__footer-image-container'>
            <img
                className='deacon__footer-image'
                alt='footer'
                src={Dictionary.footer.image}
            />
        </div>
        <div className='deacon__footer-container'>
            <Logo className='deacon__footer-logo'/>
            <div className='deacon__footer-title'>
                {Dictionary.footer.title}
            </div>
            <div className='deacon__footer-info-container'>
                <div className='deacon__footer-info-module'>
                    <div className='deacon__footer-info-module-title'>
                        {Dictionary.contact.locationTitle}
                    </div>
                    <div className='deacon__footer-info-module-text'>
                        {Dictionary.contact.locationStreet}
                    </div>
                    <div className='deacon__footer-info-module-text'>
                        {Dictionary.contact.locationLocale}
                    </div>
                </div>
                <div className='deacon__footer-info-module deacon__footer-info-module-contact'>
                    <div className='deacon__footer-info-module-title'>
                        {Dictionary.footer.contactTitle}
                    </div>
                    <div className='deacon__footer-info-module-links'>
                        <a
                            href={`mailto:${Dictionary.generalEmail}?subject=I\'d like to learn more about the Deacon`}
                            className='deacon__footer-info-module-link'
                        >
                            {Dictionary.footer.contactGeneral}
                        </a>
                        <span className='deacon__footer-info-module-bullet' />
                        <a
                            target="_blank" rel="noopener noreferrer"
                            href='https://docs.google.com/forms/d/e/1FAIpQLSewpxRgFBUVAKqkErC_6EQ8ffaYc77SDzf9K7SEceXA5CeZ-w/viewform?vc=0&c=0&w=1'
                            className='deacon__footer-info-module-link'
                        >
                            Events
                        </a>
                        <span className='deacon__footer-info-module-bullet' />
                        <a
                            href={`mailto:${Dictionary.pressEmail}?subject=Press Inquiry`}
                            className='deacon__footer-info-module-link'
                        >
                            Press
                        </a>
                        <span className='deacon__footer-info-module-bullet' />
                        <a
                            href={`mailto:${Dictionary.partnerEmail}?subject=Partnership Inquiry`}
                            className='deacon__footer-info-module-link'
                        >
                            Partnerships
                        </a>
                    </div>
                </div>
                <div className='deacon__footer-info-module'>
                    <div className='deacon__footer-info-module-title'>
                        {Dictionary.footer.socialTitle}
                    </div>
                    <div className='deacon__footer-info-module-social-icons'>
                        <a target="_blank" rel="noopener noreferrer" href='https://www.facebook.com/thedeaconphl'>
                            <i className='deacon__footer-info-module-social-icon fab fa-facebook-f'></i>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/thedeaconphl/'>
                            <i className='deacon__footer-info-module-social-icon fab fa-instagram'></i>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href='https://twitter.com/thedeaconphl'>
                            <i className='deacon__footer-info-module-social-icon fab fa-twitter'></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className='deacon__footer-note'>
                <div className='deacon__footer-note-copyright'>&#169; {Dictionary.footer.copyright}</div>
                <div className='deacon__footer-note-credits'>
                    <div>
                        Site Design by <a target="_blank" rel="noopener noreferrer" href='http://www.andrewmcquiston.com'>A. McQuiston</a>
                    </div>
                    <div className='deacon__footer-note-credits-right'>
                        Development by <a target="_blank" rel="noopener noreferrer"href='http://www.jpmarra.com'>JP Marra</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Footer;
