import React, { Component } from 'react';
import SweetScroll from 'sweet-scroll';
import Splash from './components/Splash.js';
import ContentModule from './components/ContentModule';
import About from './components/About';
import TopNav from './components/TopNav';
import { ReactComponent as Logo } from './assets/icons/Logo-Hor-Large.svg';
import Dictionary from './dictionary';
import 'normalize.css';
import './styles/index.scss';

class App extends Component {

  componentDidMount() {
      this.sweetScroll = new SweetScroll();
  }

  handleScroll(element) {
      this.sweetScroll.to(element);
  }

  render() {
    return (
      <div className="deacon">
      <div className='deacon__nav-container'>
        <Logo className='deacon__nav-container-logo'/>
        <TopNav handleScroll={this.handleScroll.bind(this)}/>
      </div>
        <Splash />
        {Dictionary.contentModules.map((content, idx) => (
            <ContentModule
                key={idx}
                title={content.title}
                copy={content.copy}
                image={content.image}
                imageDescriptor={content.imageDescriptor}
                orientation={content.orientation}
            />
        ))}
        <div className='deacon-splash__outro'>
            <span>{Dictionary.splashOutro}</span>&nbsp;
            <span className='deacon-splash__outro-opening'>{Dictionary.openingDate}</span>
        </div>
        <About />
      </div>
    );
  }
}

export default App;
