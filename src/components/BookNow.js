import React, { Component } from 'react';
import classNames from 'classnames';

class BookNow extends Component {

    constructor() {
        super();

        this.state = {
            visible: false,
            opacity: 0
        }
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        document.addEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        if (window.scrollY > 130) {
            const opacity = this.props.fadeInOpacity(200, 130)
            this.setState({ visible: true, opacity });

        } else if (window.scrollY < 80 && this.state.visible) {
            this.setState({ visible: false });
        }
    }

    render() {
        const bookNowStyle = {
            opacity: this.state.opacity
        };

        return (
            <div id='book-now' style={bookNowStyle} className={classNames('deacon__book-now', { hide: !this.state.visible })}>
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
