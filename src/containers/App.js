import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'
import classes from './App.css'


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


      if (this.state.showPersons){
        persons =   <Persons
               persons={this.state.persons}
               clicked={this.deletePersonHandler}
               changed={this.nameChangedHandler}/>

      }



    return (

      <div className={classes.App}>
          <Cockpit
              appTitle={this.props.title}
              persons={this.state.persons}
              showPersons={this.state.showPersons}
              clicked={this.togglePersonHandler}/>
          {persons}
      </div>

     //    React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I am a react App'))
    );
  }
}

export default App;
