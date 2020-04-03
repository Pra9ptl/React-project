import React from 'react';
import Person from './Person/Person';

const Persons = (props) => (
    props.persons.map((p, index) => {
        return <Person
          click={() => props.click(index)}
          name={p.name}
          key={p.id}
          age={p.age}
          change={(event) => props.change(event, p.id)} />
      })
);

export default Persons;