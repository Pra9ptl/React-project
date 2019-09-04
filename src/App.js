import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {

  const [personsState, setPersonsState] = useState({
    persons: [
      {name: 'Pranav', age: 22},
      {name: 'Druvin', age: 23},
      {name: 'Rutuj', age: 24}
    ]
  });

  console.log(personsState);

  const changeNameHandler = (newName) => {
    //console.log('Was Clicked');
  
    setPersonsState ({persons: [
      {name: 'Jarvis', age: 22},
      {name: 'Kanudo', age: 23},
      {name: newName, age: 30}
    ]});
  }

  return (
    <div className="App">
      <h1>I am JARVIS</h1>
      <button onClick={() => changeNameHandler('Chutiyo!!!!')}>Switch Name</button>
      <Person 
        name = {personsState.persons[0].name} 
        age = {personsState.persons[0].age}/>
      <Person 
        name = {personsState.persons[1].name} 
        age = {personsState.persons[1].age} 
        click={changeNameHandler.bind(this, 'Chutiyo!!')}> My Hobbies: Coding</Person>
      <Person 
        name = {personsState.persons[2].name} 
        age = {personsState.persons[2].age}/>
    </div>
  );
}

export default App;

