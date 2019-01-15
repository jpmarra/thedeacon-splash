import React, { Component } from 'react';
import SweetScroll from 'sweet-scroll';
import Splash from './components/Splash.js';
import ContentModule from './components/ContentModule';
import About from './components/About';
import History from './components/History';
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
        <Splash handleScroll={this.handleScroll.bind(this)}/>
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
      </div>
    );
  }
}

export default App;
