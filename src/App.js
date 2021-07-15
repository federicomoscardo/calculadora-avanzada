import React, { Component } from 'react';
import './App.css';
import Input from './components/Input'
import Results from './components/Results'
import {connect} from 'react-redux'

class App extends Component {


  render() {
    return (
      <div>
        <div className="d-flex">
          <Input numInput='1' value={this.props.input1}></Input>
          <Input numInput='2' value={this.props.input2}></Input>
        </div>
          <Results></Results>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    input1: state.input1,
    input2: state.input2
  }
}

export default connect(mapStateToProps)(App)
