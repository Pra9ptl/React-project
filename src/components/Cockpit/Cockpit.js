import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {

    //using reference in react funcation based comonent
    const toggleBtnRef = useRef(null);
    //this will not work right after we assign the ref to null as JSX code is yet to be executed 
    // toggleButtonRef.current.click();

    //Can use as many useEffect...
    //this useEffect will run initially and when persons is changed or also can pass multiple fields which it can depend on
    // useEffect(() => {
    //     console.log('[Cockpit.js] useEffect');
    //     //https requests...
    //     setTimeout(() => {
    //         alert('Saved date to cloud');
    //     }, 1000);
    // }, [props.persons]);

    //For functional based components only
    const authContext = useContext(AuthContext);

    console.log(authContext.authenticated);

    //this useEffect will run only for the first time as it  has no depedency change
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        //https requests...
        // setTimeout(() => {
        //     alert('Saved data to cloud');
        // }, 1000);
        toggleBtnRef.current.click();
        return () => {
            console.log('[Cockpit.js] Clean up work in useEffect');
        };
    }, []);


    //Runs on every update cycle
    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] Clean up work in 2nd useEffect');
        };
    });

    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red);
    }

    if (props.personsLength <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
                Toggle Persons
            </button>
            <button onClick={authContext.login}>Log In</button>
        </div>
    );
};

export default React.memo(cockpit);