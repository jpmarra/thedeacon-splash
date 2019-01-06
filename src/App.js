import React, { Component } from 'react';
import Splash from './components/Splash.js';
import 'normalize.css';
import './styles/index.scss';

class App extends Component {
  render() {
    return (
      <div className="deacon">
        <Splash />
      </div>
    );
  }
}

export default App;
