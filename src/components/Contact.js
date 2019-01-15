import React from 'react';
import Dictionary from '../dictionary';

const Contact = () => (
    <div id='contact' className='deacon__contact'>
        <div className='deacon__contact-container'>
            <div className='deacon__contact-header'>
                {Dictionary.contact.header}
            </div>
            <div className='deacon__contact-info-container'>
                <div className='deacon__contact-info-location'>
                    <div className='deacon__contact-info-location-title'>
                        {Dictionary.contact.locationTitle}
                    </div>
                    <div className='deacon__contact-info-location-street'>
                        {Dictionary.contact.locationStreet}
                    </div>
                    <div className='deacon__contact-info-location-locale'>
                        {Dictionary.contact.locationLocale}
                    </div>
                </div>
                <div className='deacon__contact-info-general'>
                    <div className='deacon__contact-info-general-title'>
                        {Dictionary.contact.generalTitle}
                    </div>
                    <div className='deacon__contact-info-body'>
                        {Dictionary.contact.generalBody}
                    </div>
                </div>
                <div className='deacon__contact-info-press'>
                    <div className='deacon__contact-info-press-title'>
                        {Dictionary.contact.pressTitle}
                    </div>
                    <div className='deacon__contact-info-body'>
                        {Dictionary.contact.pressBody}
                    </div>
                </div>
            </div>
            <button className='deacon__contact-button'>LEARN MORE</button>
        </div>
    </div>
);

export default Contact;
