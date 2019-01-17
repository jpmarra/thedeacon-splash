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
        const opacity = this.setOpacity(200, 130)
        this.setState({ opacity });
    }

    setOpacity(range, start) {
        const currentY = Math.round(Math.abs(window.scrollY));
        const end = start + range;

        return currentY < end ? (currentY - start) / (end - start) : 1
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
