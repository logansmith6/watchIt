import React from 'react';
import '../App.css';

import Router from './Router';
import PostsContainer from './PostsContainer';

import Login from '../components/Registration/Login';
import Logout from '../components/Registration/Logout';
import Account from '../components/Registration/Account';




const App = () => {
    return (
      
      <div>
        <Router />
        <Login />
        
        <Account />
      </div>
    )
}

export default App;
