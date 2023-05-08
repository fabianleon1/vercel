
import './App.css';
import state from 'react';
import React, { Component } from 'react';
import tasks from './sample/tasks.json'

console.log(tasks);



class App extends Component {


  state = {

    tasks: tasks
  }

  render() {
    return (
      <div>

       {this.state.tasks.map(e => <h1>{e.title}</h1>)}
       {this.state.tasks.map(e => <p>{e.Description}</p>)}
      </div>
    )
  }



}


export default App;