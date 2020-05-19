import React, { Component } from 'react';
import Person from './Components/Person';
import './App.css';

class App extends Component {

  state = {
    persons: [
      { name: "Jacob", age: 45, pet: "Alfie" },
      { name: "Alexander", age: 28, pet: "Alfie" },
      { name: "Annie", age: 26, pet: "Alfie" },
      { name: "Ivan", age: 56, pet: "Bobbo" },

    ]
  }
  render() {

    const eachPerson = this.state.persons.map((person, index) => {
      return <Person name={person.name} age={person.age} pet={person.pet} key={index} />
    })

    return (
      <div>
        <h1>My React Project</h1>
        {eachPerson}
      </div>
    );
  }
}

export default App;
