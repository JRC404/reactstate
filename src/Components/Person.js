import React from 'react';
import Pet from './Pet';

const Person = (props) => {
    return (
        <div>
            <p>My name is {props.name}! My age is {props.age}</p>
            <Pet petName={props.pet} />
        </div>
    )
}

export default Person;