import React from 'react';
import { validate } from 'email-validator';

const MailchimpForm = ({ onValidated }) => {
    let email;
    const submitForm = () => {
        if (validate(email.value)) {
            console.log('THAT WORKS!')
            onValidated({ EMAIL: email.value })
        }
    }

    return (
        <div action='' className='deacon__contact-newsletter-form'>
            <input
                className='deacon__contact-newsletter-form-input'
                type='email'
                ref={node => (email = node)}
                placeholder='Email Address'
            />
            <button className='deacon__contact-newsletter-form-button' onClick={submitForm}>
                SIGN UP
            </button>
        </div>
    );
};

export default MailchimpForm;
