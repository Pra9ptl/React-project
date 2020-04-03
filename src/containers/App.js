import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Persons';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: '101', name: 'Pranav', age: 28 },
      { id: '102', name: 'Dhruvin', age: 29 },
      { id: '103', name: 'Rutuj', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  deletePersonhandler = (p_index) => {
    const per = this.state.persons.slice();
    per.splice(p_index, 1);
    this.setState({ persons: per });
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          click={this.deletePersonhandler}
          change={this.nameChangedHandler} />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
        {persons}
      </div>
    );
  }
}



export default App;
