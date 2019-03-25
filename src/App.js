import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Travel</h1>
        </header>
        <Travel
          destination="Paris"
          country="France"
          distance="466 km"
          photo="https://i.postimg.cc/Gm8Vk11N/paris.jpg"
        />
        <Travel
          destination="Berlin"
          country="Allemagne"
          distance="1231 km"
          photo="https://i.postimg.cc/W36Qh6P1/berlin.jpg"
        />
      </div>
    );
  }
}

export default App;
