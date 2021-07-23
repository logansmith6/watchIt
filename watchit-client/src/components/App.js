import React, { Component } from 'react';
import Login from './components/Users/Login';
import Logout from './components/Users/Logout'
import UserProfile from './components/Users/UserProfile'

import './App.css';


class App extends Component {
  
  
  
  render() {
    
  return (
    <div className="App">
      <section class="header">
      
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <form class="example" action="action_page.php">
          <input type="text" placeholder="Search.." name="search"/>
          <button type="submit"><i class="fa fa-search"></i></button>
        </form>
        <a href='/'><img className="main-logo"src="https://i.imgur.com/WYhzzOk.png"/></a>
        
       <Login />
       <Logout />
       <UserProfile />
      </section>
      
    </div>
  );
 }
}

export default App;
