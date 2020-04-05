import React, { Component } from 'react';
import Aux from '../../../HOC/Auxillary';
// import classes from './Person.css';

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

export default Person;

