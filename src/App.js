import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id:'101', name: 'Pranav', age: 28 },
      { id:'102', name: 'Dhruvin', age: 29 },
      { id:'103', name: 'Rutuj', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  // switchNameHandler = ( newName ) => {
  //   // console.log('Was clicked!');
  //   // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
  //   this.setState( {
  //     persons: [
  //       { name: newName, age: 28 },
  //       { name: 'Dhruvin', age: 29 },
  //       { name: 'Rutuj', age: 27 }
  //     ]
  //   } )
  // }

  deletePersonhandler = (p_index) => {
      //alternative
      //const per = [...this.state.persons];
      const per = this.state.persons.slice();
      per.splice(p_index, 1);
      this.setState({ persons: per });
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( { persons: persons } );
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  render () {
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>

          {/* Printing list of Component */}
          {this.state.persons.map((p, index) => {
            return <Person
                      click={() => this.deletePersonhandler(index)} 
                      name={p.name} 
                      key={p.id}
                      age={p.age}
                      change={(event) => this.nameChangedHandler(event, p.id)} />
          })}

          {/* <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind( this, 'Jarvis' )}
            changed={this.nameChangedHandler} >My Hobbies: Racing</Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} /> */}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
