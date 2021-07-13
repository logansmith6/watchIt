import React, { Component } from 'react';
import Login from './components/Users/Login';
import Logout from './components/Users/Logout'
import UserProfile from './components/Users/UserProfile'
import { useAuth0 } from '@auth0/auth0-react'
import './App.css';


class App extends Component {
  
  
  
  render() {
    
  return (
    <div className="App">
      <section class="header">
      </section>
      <img className="main-logo"src="https://i.imgur.com/WYhzzOk.png"/>
       <Login />
       <Logout />
       <UserProfile />
    </div>
  );
 }
}

export default App;
