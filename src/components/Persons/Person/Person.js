import React, { Component } from 'react';
import Aux from '../../../HOC/Auxillary';
import withClass from '../../../HOC/withClass';
import classes from './Person.css';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

class Person extends Component {

    constructor(props) {
        super(props)
        this.inputElementRef = React.createRef();
    }

    //For class based component only
    static contextType = AuthContext;

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated)
    }

    render() {
        console.log('[Person.js] rendering....');
        return (
            <Aux>
                    { this.context.authenticated ? <p>Authenticated!!</p> : <p>Please Login!!!</p> }
                {}
                <p onClick={this.props.click} > I'm {this.props.name}. My age is {this.props.age}.</p>
                <p> {this.props.children}</p >
                <input
                    // ref={(inputEl) => { this.inputElement = inputEl }}
                    ref={this.inputElementRef}
                    type="text"
                    onChange={this.props.change}
                    value={this.props.name} />
            </Aux>
        )
    };
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    change: PropTypes.func
};

//this will lose all its props in the person component.
export default withClass(Person, classes.Person);

