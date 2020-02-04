import React from 'react';

function Person({person}) {
    return <h2>Person {person.name} of age {person.age} is skilled in {person.skill}</h2>
}

export default Person;