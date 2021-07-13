import React, { Component } from 'react';
import addUser from './components/Users/addUser';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
  return (
    <div className="App">
      <addUser />
    </div>
  );
 }
}

export default App;
