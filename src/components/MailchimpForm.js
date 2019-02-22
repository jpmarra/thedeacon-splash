import React, { Component } from 'react';
import { validate } from 'email-validator';
import { ToastsStore } from 'react-toasts';

class MailchimpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            submitted: false
        }

        this.submitForm = this.submitForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleToast = this.handleToast.bind(this);
    }
    submitForm(e) {
        e.preventDefault();

        if (validate(this.state.email)) {
            this.props.onValidated({ EMAIL: this.state.email });
            this.setState({ email: '', submitted: false });
        }
    }

    handleChange(e) {
        e.preventDefault();
        let email = e.target.value;
        this.setState({ email });
    }

    handleToast() {
        if (!this.state.submitted) {
            if (this.props.status === 'success') {
                this.setState({ submitted: true }, () => ToastsStore.success(this.props.message))
            } else if (this.props.status === 'error') {
                this.setState({ submitted: true }, () => ToastsStore.error(this.props.message))
            }
        }
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
                    <span className="button-text">SIGN UP</span>
                </button>
                {this.handleToast()}
            </form>
        );
    }
};

export default MailchimpForm;
