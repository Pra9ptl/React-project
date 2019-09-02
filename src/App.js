import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>I am JARVIS</h1>
        <Person name = "Pranav" age = "22"/>
        <Person name = "Druvin" age = "23"/>
        <Person name = "Rutuj" age = "24"/>
      </div>
    );
  }
}

export default App;
