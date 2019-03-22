import React, { Component } from 'react';
import List from './List/List'

//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <div className="table">
            
            <List />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
