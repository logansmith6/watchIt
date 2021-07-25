import React from 'react';
import { Switch, Route } from 'react-router-dom';



import HomePage from './HomePage'
import PostsContainer from './PostsContainer'
//import HomePage from '../components/HomePage'

const Router = () => {
    return (
        <Switch>
            
            <Route exact path='/posts' components={HomePage} />
            
            <Route exact path='/posts/new' component={PostsContainer} />
             
            
        </Switch>
    )
}

export default Router;