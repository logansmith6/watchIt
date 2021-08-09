import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';





import HomePage from './HomePage';
import PostsForm from './PostsForm';
import About from './About'

const Router = () => {
    return (
        <Switch>
            
            <Redirect exact from="/" to="/posts" />
            <Route exact path='/posts' component={HomePage} />
            <Route exact path='/posts/new' component={PostsForm} />
            <Route path='/about' component={About} />
            
        </Switch>
    )
}

export default Router;