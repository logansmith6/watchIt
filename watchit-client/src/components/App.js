import React from 'react';
import '../App.css';

import Router from './Router';
//import PostsContainer from './PostsContainer';

import AuthenticationButton from '../components/Registration/AuthenticationButton';

import Account from '../components/Registration/Account';




const App = () => {
    return (
      
      <div>
        <Router />
        <AuthenticationButton />
        
        <Account />
      </div>
    )
}

export default App;
