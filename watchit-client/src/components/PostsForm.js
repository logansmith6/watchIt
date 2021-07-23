import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions/postsActions';

class PostsForm extends Component {

    state = {
        title: '',
        description: '',
        file: []

    }

    handleChange = event => {
        const {name, value} = event.target

        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.addPost(this.state)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Title:</label>
                <input type='text' value={this.state.title} onChange={this.handleChange} name='title'/>
                    <br />
                <label>Description:</label>
                <input type='text' value={this.state.description} onChange={this.handleChange} name='description'/>
                    <br />
                <input type='file'/>
                    <br />
                    
                <input type="submit" value="Post Video"/>
            </form>
        )
    }
}

export default connect(null, {addPost})(PostsForm);