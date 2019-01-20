import React from 'react';
import Dictionary from '../dictionary';
import { ReactComponent as Logo } from '../assets/icons/Deacon-Footer_Logo-Large.svg';

const Footer = () => (
    <div className='deacon__footer'>
        <div className='deacon__footer-image-container'>
            <img  className='deacon__footer-image' src={Dictionary.footer.image} />
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
                <div className='deacon__footer-info-module'>
                    <div className='deacon__footer-info-module-title'>
                        {Dictionary.footer.contactTitle}
                    </div>
                    <div className='deacon__footer-info-module-links'>
                        <a href={`mailto:${Dictionary.generalEmail}?subject=Hotel Inquiry`} className='deacon__footer-info-module-link'>
                            {Dictionary.footer.contactGeneral}
                        </a>
                        <span className='deacon__footer-info-module-bullet' />
                        <a href={`mailto:${Dictionary.pressEmail}?subject=Press Inquiry`} className='deacon__footer-info-module-link'>
                            {Dictionary.contact.pressTitle}
                        </a>
                    </div>
                </div>
                <div className='deacon__footer-info-module'>
                    <div className='deacon__footer-info-module-title'>
                        {Dictionary.footer.socialTitle}
                    </div>
                    <div className='deacon__footer-info-module-social-icons'>
                        <a href='https://www.google.com'>
                            <i className='deacon__footer-info-module-social-icon fab fa-facebook-f'></i>
                        </a>
                        <a href='https://www.google.com'>
                            <i className='deacon__footer-info-module-social-icon fab fa-instagram'></i>
                        </a>
                        <a href='https://www.google.com'>
                            <i className='deacon__footer-info-module-social-icon fab fa-twitter'></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className='deacon__footer-copyright'>
                &#169; {Dictionary.footer.copyright}
            </div>
        </div>
    </div>
);

export default Footer;
