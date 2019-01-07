import React, { Component } from 'react';
import Splash from './components/Splash.js';
import ContentModule from './components/ContentModule';
import Dictionary from './dictionary';
import 'normalize.css';
import './styles/index.scss';

class App extends Component {
  render() {
    return (
      <div className="deacon">
        <Splash />
        {Dictionary.contentModules.map(content => (
            <ContentModule
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
    );
  }
}

export default App;
