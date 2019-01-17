import React, { Component } from 'react';
import classNames from 'classnames';

class BookNow extends Component {

    constructor() {
        super();

        this.state = {
            opacity: 0
        }

        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        document.addEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        const opacity = this.props.fadeInOpacity(200, 130)
        this.setState({ opacity });
    }

    render() {
        const bookNowStyle = {
            opacity: this.state.opacity
        };

        return (
            <div id='book-now' style={bookNowStyle} className='deacon__book-now'>
            <a
                className='deacon__book-now'
                href='https://www.google.com'
                target="_blank"
                rel='noopener noreferrer'
            >
                BOOK<br/>NOW
            </a>
            </div>
        )
    }
}

export default BookNow;
