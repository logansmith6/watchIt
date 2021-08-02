import React from 'react';
import { Switch, Route } from 'react-router-dom';





import HomePage from './HomePage';
import PostsForm from './PostsForm'

const Router = () => {
    return (
        <Switch>
            
            
            <Route exact path='/posts' component={HomePage} />
            <Route exact path='/posts/new' component={PostsForm} />
             
            
        </Switch>
    )
}

export default Router;