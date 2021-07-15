import React, { Component } from 'react';
import './App.css';
import Input from './components/Input'
import Results from './components/Results'

class App extends Component {


  render() {
    return (
      <div>
        <div className="d-flex">
          <Input numInput='1' ></Input>
          <Input numInput='2' ></Input>
        </div>
          <Results></Results>
      </div>
    )
  }
}



export default App
