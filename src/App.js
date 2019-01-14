import React, { Component } from 'react';
import './App.css';
import Person from  './Person/Person';
import classes from './App.css'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {

  state = {
    persons: [
      { id: "ertr45",name: "Max", age: 28},
      { id: "sdfdf45" ,name: "Menu", age: 22},
      { id: "fgnbn45", name: "Stephanie", age: 21}
    ],
      showPersons: false
  }
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
     const personIndex = this.state.persons.findIndex(p => {
        return p.id === id;
     });

     const person = {
         ...this.state.persons[personIndex]
     };

     // const person = Object.assign({}, this.state.persons[personIndex]);

      person.name = event.target.value;

      const persons = [...this.state.persons];
      persons[personIndex] = person;

      this.setState({ persons : persons  })
  }

  togglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons : !doesShow})
  }

  render() {



      let persons = null;
      let btnClass = '';

      if (this.state.showPersons){
        persons = (
          <div>
              {
                  this.state.persons.map((person, index) => {
                      return <ErrorBoundary key={person.id}><Person
                          click={() => this.deletePersonHandler(index)}
                          name={person.name}
                          age={person.age}

                          changed={(event) => this.nameChangedHandler(event, person.id)}/> </ErrorBoundary>
                  })
              }
            </div>

        );
          btnClass = classes.Red;

      }

      const assignedClasses = [];
          if (this.state.persons.length <= 2){
              assignedClasses.push(classes.red);
          }
          if (this.state.persons.length <= 1){
              assignedClasses.push(classes.bold);
          }

    return (

      <div className={classes.App}>
       <h1>Hi, I am a react App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button className={btnClass}
            onClick={this.togglePersonHandler}>Toggle Persons</button>
          {persons}
      </div>

     //    React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I am a react App'))
    );
  }
}

export default App;
