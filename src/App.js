import React, { Component } from 'react';
import appleBadge from './assets/images/badge-app-store.png';
import googleBadge from './assets/images/badge-google-play.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="glass"></div>

          <h1 className="App-title">Welcome to Afyc</h1>

          <div className="badges">           
            <a style={{marginRight: '20px'}} href="#googleBadge">
              <img style={{paddingTop: '9px'}} src={googleBadge} alt="googleBadge"/>
            </a>

            <a href="#appleBadge">
              <img src={appleBadge} alt="appleBadge"/>
            </a>
          </div>

        </header>
      </div>
    );
  }
}

export default App;
