import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
    // static getDerivedStateFromProps(props, state){
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return { message: 'Snapshot Message!' };
    }

    componentWillUpdate

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
                    change={(event) => this.props.change(event, p.id)} />
            );
        });
    };
}

export default Persons;