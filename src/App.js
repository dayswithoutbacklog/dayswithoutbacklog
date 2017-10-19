import React, { Component } from 'react';
import './App.css';

import Thermometer from 'react-thermometer-component'

class App extends Component {

  constructor() {
    super()
    this.startDate = new Date(2017, 9, 19)
    this.diffDays = new Date(new Date() - this.startDate).getDate()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="thermometer-component">
            <Thermometer value={this.diffDays} max={30} format=" day(s)"/>
          </div>
          <h1 className="App-title">Days without backlog!</h1>
        </header>
        <p className="App-intro">
          A project to show the days without backlog to our Product Owner
        </p>
      </div>
    );
  }
}

export default App;
