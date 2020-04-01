import React from 'react';
import './Person.css'
import Radium from 'radium';

const Person = (props) => {

    const styles = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };

    return (
        <div className="Person" style={styles}>
            <p onClick={props.click}>I'm {props.name}. My age is {props.age}.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name} />
        </div>
    )
};

export default Radium(Person);

