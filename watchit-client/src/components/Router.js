import React from 'react';
import { Switch, Route } from 'react-router-dom';



import HomePage from './HomePage'
//import HomePage from '../components/HomePage'

const Router = () => {
    return (
        <Switch>
            
            <Route exact path='/posts' component={HomePage} />
             
            
        </Switch>
    )
}

export default Router;