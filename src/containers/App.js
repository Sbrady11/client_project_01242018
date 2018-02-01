import React, { Component } from 'react';
import '../styles/App.css';
import { Button } from 'reactstrap';
import MessageComp from '../components/messageComp.js';
import Criteria from '../components/criteriaSelection.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <Button> hello </Button>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <MessageComp />
        <Criteria />
      </div>
    );
  }
}

export default App;
