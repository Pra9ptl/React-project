import React, { Component } from 'react';
import Aux from '../../../HOC/Auxillary';
import withClass from '../../../HOC/withClass';
import classes from './Person.css';

class Person extends Component {
    render() {
        console.log('[Person.js] rendering....');
        return (
            <Aux>
                <p onClick={this.props.click} > I'm {this.props.name}. My age is {this.props.age}.</p>
                <p> {this.props.children}</p >
                <input type="text" onChange={this.props.change} value={this.props.name} />
            </Aux>
        )
    };
}

//this will lose all its props in the person component.
export default withClass(Person, classes.Person);

