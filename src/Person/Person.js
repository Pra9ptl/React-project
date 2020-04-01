import React from 'react';
import classes from './Person.css'

const Person = (props) => {

    // const styles = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // };

    return (
        //<div className="Person" style={styles}>
        <div className={classes.Person}>
            < p onClick={props.click} > I'm {props.name}. My age is {props.age}.</p>
            < p > {props.children}</p >
            <input type="text" onChange={props.change} value={props.name} />
        </div>
    )
};

export default Person;

