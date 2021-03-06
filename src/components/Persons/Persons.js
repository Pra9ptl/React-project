import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
    // static getDerivedStateFromProps(props, state){
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate');

        // if there is no changes in the persons state then there is no need to re-render the component.
        //can also use PureComponent instead of manually coding for the condition to check.
        if(nextProps.persons !== this.props.persons || nextProps.change !== this.props.change || nextProps.click !== this.props.click){
            return true;
        }else {
            return false;
        }
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return { message: 'Snapshot Message!' };
    }

    componentWillUnmount(){
        console.log('[Perosons.js] componentWillUnmount');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Perosns.js] componentDidUpdate');
        console.log(snapshot);
    }

    render() {
        console.log('[Persons.js] rendering....');
        return this.props.persons.map((p, index) => {
            return (
                <Person
                    click={() => this.props.click(index)}
                    name={p.name}
                    key={p.id}
                    age={p.age}
                    change={(event) => this.props.change(event, p.id)}
                    />
            );
        });
    };
}

export default Persons;