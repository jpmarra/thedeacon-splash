import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="deacon-splash">
          <div className="deacon-splash__container">
              <header className="deacon-splash__hero">
                  <span className="deacon-splash__hero">A place to </span>
                  <span className="deacon-splash__hero">Gather</span>
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

export default App;
