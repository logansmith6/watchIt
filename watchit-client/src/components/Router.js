import React from 'react';
import { Switch, Route } from 'react-router-dom';




import PostsContainer from './PostsContainer'

import PostsForm from './PostsForm'

const Router = () => {
    return (
        <Switch>
            
            
            <Route exact path='/posts' components={PostsContainer} />
            <Route exact path='/posts/new' component={PostsForm} />
             
            
        </Switch>
    )
}

export default Router;