import React from 'react';
import '../App.css';

import Router from './Router';
import { useAuth0 } from '@auth0/auth0-react'
//import PostsContainer from './PostsContainer';

import AuthenticationButton from '../components/Registration/AuthenticationButton';
import Loading from "../components/Registration/Loading";
import PostsContainer from './PostsContainer';
import { withAuthenticationRequired } from '@auth0/auth0-react';




const App = () => {
  
  const { isLoading } = useAuth0();
  if (isLoading) {
    return <Loading />
  }

    return (

      
      
      <div>
        <PostsContainer />
        <Router />
        <AuthenticationButton />
      
      </div>
    )
}

export default withAuthenticationRequired(App);
