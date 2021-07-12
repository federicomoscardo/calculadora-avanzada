import React, { Component } from 'react';
import './App.css';
import Inputs from './components/Inputs'
import Results from './components/Results'

class App extends Component {


  render() {
    return (
      <div>
        <Inputs></Inputs>

        <Results></Results>
      </div>
    )
  }
}

export default App;
