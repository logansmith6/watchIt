import React, { Component } from 'react';
import Login from './components/Users/Login';
import Logout from './components/Users/Logout'


import './App.css';


class App extends Component {
  render() {
  return (
    <div className="App">
      <h1>Sign Up</h1>
       <Login />
       <Logout />
    </div>
  );
 }
}

export default App;
