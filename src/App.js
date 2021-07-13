import React, { Component } from 'react';
import AddUser from './components/Users/AddUser';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
  return (
    <div className="App">
      <h1>Sign Up</h1>
      <AddUser />
    </div>
  );
 }
}

export default App;
