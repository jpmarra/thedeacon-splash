import React, { Component } from 'react';
import classNames from 'classnames';

class BookNow extends Component {

    constructor() {
        super();

        this.state = {
            visible: false
        }

        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        document.addEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        console.log('Scroll Y: ', window.scrollY, ' InnerHeight: ', window.innerHeight);
        if (window.scrollY > 130) {
            this.setState({ visible: true });
        } else if (window.scrollY < 130 && this.state.visible) {
            this.setState({ visible: false });
        }
    }

    render() {
        return (
            <div id='book-now' className={classNames('deacon__book-now animated fadeIn', { hide: !this.state.visible })}>
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
