import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import ListExampleBulleted from './list.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Rotthub</h1>
        </header>
        <h1 className="App-title">
          Computer Science and Projects
        </h1>

          <ListExampleBulleted />


      </div>
    );
  }
}

export default App;
