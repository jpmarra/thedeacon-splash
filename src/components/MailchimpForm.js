import React, { Component } from 'react';
import { validate } from 'email-validator';

class MailchimpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        }

        this.submitForm = this.submitForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    submitForm(e) {
        e.preventDefault();

        if (validate(this.state.email)) {
            this.props.onValidated({ EMAIL: this.state.email });
            this.setState({ email: ''});
        }
    }

    handleChange(e) {
        e.preventDefault();
        let email = e.target.value;
        this.setState({ email });
    }

    render() {
        return (
            <form className='deacon__contact-newsletter-form' onSubmit={this.submitForm}>
                <input
                    className='deacon__contact-newsletter-form-input'
                    type='email'
                    value={this.state.email}
                    placeholder='Email Address'
                    onChange={this.handleChange}
                />
                <button className='deacon__contact-newsletter-form-button' type='submit'>
                    SIGN UP
                </button>
            </form>
        );
    }
};

export default MailchimpForm;
