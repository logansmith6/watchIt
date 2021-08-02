//container for posts... methods and data

import React, { Component } from 'react';
//connect will allow use of actions
import { connect } from 'react-redux';

import   { fetchPosts } from '../actions/postsActions';

import HomePage from './HomePage'

class PostsContainer extends Component {

    componentDidMount() {
        this.props.fetchPosts()
    }
    
    render() {
        return (
            <div>
                Posts Container
                <HomePage />
            </div>
        );
    }
}

export default connect(null, { fetchPosts })(PostsContainer);
//this makes fetchPosts available to the container as a prop