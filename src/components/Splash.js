import React, { Component } from 'react';
import { ReactComponent as Logo } from '../assets/Logo-Hor-Large.svg';
import TopNav from './TopNav';
import ContentModule from './ContentModule';

class Splash extends Component {

    constructor() {
        super();

        this.state = {
            currentWordIdx: 0,
            currentWord: 'Gather',
            words: ['Gather', 'Laugh', 'Celebrate', 'Create', 'Collaborate', 'Relax', 'Enjoy']
        }
    }

    componentDidMount() {
        this.wordInterval = setInterval(() => this.changeWord(), 500);
    }

    componentWillUnmount() {
        clearInterval(this.wordInterval);
    }

    changeWord() {
        const currentIdx = this.state.words.indexOf(this.state.currentWord);
        const newIdx = currentIdx >= this.state.words.length ? 0 : currentIdx + 1;
        this.setState({ currentWord: this.state.words[newIdx] });
    }
  render() {
    return (
      <div className="deacon-splash">
          <div className='deacon-splash__nav-container'>
            <Logo className='deacon-splash__logo'/>
            <TopNav />
          </div>
          <div className="deacon-splash__container">
              <header className="deacon-splash__hero">
                  <span className="deacon-splash__hero-text">A place to </span>
                  <span className="deacon-splash__hero-animated">{this.state.currentWord}</span>
              </header>
              <div className="deacon-splash__intro">
                The Deacon is a boutique hotel and event space offering a unique, thoughtfully-curated guest experience, designed for a diverse set of occasions and gatherings.
              </div>
              <button className="deacon-splash__button">Learn More</button>
          </div>
      </div>
    );
  }
}

export default Splash;
