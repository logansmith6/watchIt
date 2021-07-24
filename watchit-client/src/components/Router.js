import React from 'react';
import { Switch, Route } from 'react-router-dom';

import UsersContainer from './UsersContainer';
import PostsContainer from './PostsContainer';
//import HomePage from '../components/HomePage'

const Router = () => {
    return (
        <Switch>
            <Route exact path='/users' component={UsersContainer} />
            <Route exact path='/posts' component={PostsContainer} />
        </Switch>
    )
}

export default Router;