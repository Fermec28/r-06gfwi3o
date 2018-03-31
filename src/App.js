import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      names: ["Juan", "Pedro", "Germán"]
    }
  }

  render() {
    return (
      <div>
        {this.state.names.map((name) =>
          <Welcome name={name} />
        )}
      </div>
    );
  }
}


const Welcome= (props)=> <h1> Hola {props.name}</h1>;

export default App;
