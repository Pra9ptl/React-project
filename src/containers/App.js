import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../HOC/withClass';
import Aux from '../HOC/Auxillary';
import AuthContext from '../context/auth-context';

class App extends Component {

  constructor(props) {
    super(props);
    console.log("[App.js] Constructor");
    this.state = {
      persons: [
        { id: '101', name: 'Pranav', age: 28 },
        { id: '102', name: 'Dhruvin', age: 29 },
        { id: '103', name: 'Rutuj', age: 26 }
      ],
      otherState: 'some other value',
      showPersons: false,
      showCockpit: true,
      aunthenticated: false,
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDeriverdStateFromProps', props);
    return state;
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
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

  loginHandler = () => {
    this.setState({ aunthenticated: true });
    console.log('[App.js] Authenticated prop: ', this.state.aunthenticated);
  }

  render() {
    console.log('[App.js] render')
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          click={this.deletePersonhandler}
          change={this.nameChangedHandler}
          isAuthenticated={this.state.aunthenticated}
        />
      );
    }

    return (
      //One Way for WithClass.js
      // <WithClass classes ={classes.App}>
      <Aux>
        <button onClick={() => {
          this.setState({ showCockpit: false });
        }}>Remove Cockpit</button>

        <AuthContext.Provider value={{authenticated: this.state.aunthenticated, login: this.loginHandler}}>
          {this.state.showCockpit ? (
            <Cockpit
              title={this.props.appTitle}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              clicked={this.togglePersonsHandler}
            />) : null
          }
          {persons}
        </AuthContext.Provider>
      </Aux>
      // </WithClass>
    );
  }
}



export default withClass(App, classes.App);
