import React from 'react';
import '../App.css';

import Router from './Router';
import { useAuth0 } from '@auth0/auth0-react'
//import PostsContainer from './PostsContainer';

import AuthenticationButton from '../components/Registration/AuthenticationButton';
import Loading from "../components/Registration/Loading";

import Account from '../components/Registration/Account';




const App = () => {
  
  const { isLoading } = useAuth0();
  if (isLoading) {
    return <Loading />
  }

    return (

      
      
      <div>
        <Router />
        <AuthenticationButton />
        
        <Account />
      </div>
    )
}

export default App;
