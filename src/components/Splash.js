import React, { Component } from 'react';
import TopNav from './TopNav';
import { ReactComponent as Logo } from '../assets/icons/Logo-Hor-Large.svg';
import { ReactComponent as Arrow } from '../assets/icons/Arrow-Desktop_Default.svg';

class Splash extends Component {

    constructor() {
        super();

        this.state = {
            currentWordIdx: 0,
            currentWord: 'GATHER',
            words: ['LAUGH', 'CELEBRATE', 'CREATE', 'RELAX', 'ENJOY'],
            arrowOpacity: 1
        }

        this.handleArrow = this.handleArrow.bind(this);
    }

    componentDidMount() {
        document.addEventListener('scroll', this.handleArrow);
        this.wordInterval = setInterval(() => this.changeWord(), 500);
    }

    componentWillUnmount() {
        clearInterval(this.wordInterval);
    }

    handleArrow() {
        const arrowOpacity = this.props.fadeOutOpacity(300);
        // console.log('OPACITY: ', opacity)
        this.setState({ arrowOpacity });
    }

    changeWord() {
        const currentIdx = this.state.words.indexOf(this.state.currentWord);
        const newIdx = currentIdx >= this.state.words.length ? 1 : currentIdx + 1;
        this.setState({ currentWord: this.state.words[newIdx] });
    }
  render() {
      const arrowStyle = {
          opacity: this.state.arrowOpacity
      };

    return (
      <div className="deacon-splash">
        <Logo className='deacon-splash__logo'/>
        <TopNav handleScroll={this.props.handleScroll} fadeOutOpacity={this.props.fadeOutOpacity}/>
          <div className="deacon-splash__container">
              <header className="deacon-splash__hero">
                  <span className="deacon-splash__hero-text">A PLACE TO </span>
                  <span className="deacon-splash__hero-animated">{this.state.currentWord ? this.state.currentWord : 'GATHER'}</span>
              </header>
              <div className="deacon-splash__intro">
                The Deacon is a boutique hotel and event space offering a unique, thoughtfully-curated guest experience, designed for a diverse set of occasions and gatherings.
              </div>
              <button className="deacon-splash__button" onClick={() => this.props.handleScroll('#about')}>LEARN MORE</button>
              <Arrow
                className='deacon-splash__arrow animated infinite bounce'
                style={arrowStyle}
                onClick={() => this.props.handleScroll(window.innerHeight)}/>
          </div>
      </div>
    );
  }
}

export default Splash;
