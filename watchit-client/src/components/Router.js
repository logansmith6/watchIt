import React from 'react';
import { Switch, Route } from 'react-router-dom';


import Login from '../components/Registration/Login'
import HomePage from './HomePage'
import PostsForm from './PostsForm'
//import HomePage from '../components/HomePage'

const Router = () => {
    return (
        <Switch>
            
            <Route exact path='/posts' component={HomePage} />
            
            <Route exact path='/posts/new' component={PostsForm} />
             
            
        </Switch>
    )
}

export default Router;