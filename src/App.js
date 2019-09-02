import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Pranav', age: 22},
      {name: 'Druvin', age: 23},
      {name: 'Rutuj', age: 24}
    ]
  }

  changeNameHandler = () => {
    console.log('Was Clicked');
  }

  render() {
    return (
      <div className="App">
        <h1>I am JARVIS</h1>
        <button onClick={this.changeNameHandler}>Switch Name</button>
        <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age}/>
        <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age}> My Hobbies: Coding</Person>
        <Person name = {this.state.persons[2].name} age = {this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
