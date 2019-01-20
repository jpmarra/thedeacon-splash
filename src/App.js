import React, { Component } from 'react';
import SweetScroll from 'sweet-scroll';
import BookNow from './components/BookNow';
import Splash from './components/Splash.js';
import ContentModule from './components/ContentModule';
import About from './components/About';
import History from './components/History';
import Map from './components/Map';
import Contact from './components/Contact';
import Footer from './components/Footer';
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

  fadeInOpacity(range, start) {
      const currentY = Math.round(Math.abs(window.scrollY));
      const end = start + range;

      return currentY < end ? (currentY - start) / (end - start) : 1
  }

  fadeOutOpacity(range) {
      const currentY = Math.round(Math.abs(window.scrollY));

      return currentY < range ? (range - currentY) / range : 0;
  }

  render() {
    return (
      <div className="deacon">
        <Splash handleScroll={this.handleScroll.bind(this)} fadeOutOpacity={this.fadeOutOpacity.bind(this)} />
        <div className='deacon-splash__content-container'>
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
        </div>
        <About />
        <History
            title={Dictionary.history.title}
            copy={Dictionary.history.copy}
            image={Dictionary.history.image}
            imageDescriptor={Dictionary.history.imageDescriptor}
        />
        <Map />
        <Contact />
        <Footer />
        <BookNow fadeInOpacity={this.fadeInOpacity.bind(this)} />
      </div>
    );
  }
}

export default App;
