//container for posts... methods and data

import React, { Component } from 'react';
//connect will allow use of actions
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postsActions';
import PostsForm from './PostsForm';

class PostsContainer extends Component {

    componentDidMount() {
        this.props.fetchPosts()
    }
    
    render() {
        return (
            <div>
                Posts Container
                <PostsForm />
            </div>
        );
    }
}

export default connect(null, { fetchPosts })(PostsContainer);
//this makes fetchPosts available to the container as a prop