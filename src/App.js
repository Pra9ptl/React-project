import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components';

const StyledButton = styled.button`
background-color: ${props => props.alt? 'red' : 'green'};
font: inherit;
border: 1px solid blue;
color: white;
padding: 8px;
cursor: pointer;
&:hover {
  background-color: ${props => props.alt? 'salmon' : 'lightgreen'};
  color: black;
}
`

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
    // const style = {
    //   backgroundColor: 'green',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   color: 'white',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ':hover': {
    //     backgroundColor: '#82E0AA',
    //     color: 'black'
    //   }
    // };

    let persons = null;

    if (this.state.showPersons) {
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
        </div>
      );

      //changing class property
      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: '#D98880',
      //   color: 'black'
      // };
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <StyledButton
          alt ={this.state.showPersons}
          onClick={this.togglePersonsHandler}>Toggle Persons</StyledButton>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}



export default App;
