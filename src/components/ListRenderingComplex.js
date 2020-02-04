import React from 'react';
import Person from './Person';

function ListRenderingComplex() {
    const People = [
        {
          name: 'A',
          age: 25,
          skill: 'Angular',
    },
    {
        name: 'B',
        age: 25,
        skill: 'React',
    },
    {
    name: 'C',
    age: 25,
    skill: 'Node',
    }
   ];

const PersonList = People.map(person => <Person person={person}/>)
return <div>{PersonList}</div>
}

export default ListRenderingComplex;