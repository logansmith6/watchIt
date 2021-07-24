import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions/postsActions';




class PostsForm extends Component {

    state = {
        title: '',
        description: '',
        video: null


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
                <input type='text' value={this.state.title} onChange={this.handleChange} name='title'>
                
                </input>
                    <br />
                <label>Description:</label>
                <input type='text' value={this.state.description} onChange={this.handleChange} name='description'/>
                    <br />
                    <input
                        value={this.state.video}
                        onChange={this.handleChange}
                        id='playback'
                        type="hidden"
                        role="uploadcare-uploader"
                        data-public-key="50a37a21db13d5dd4bd7"
                        name="my_file_input" 
                        
                        />
                    <br />
                    
                <input type="submit" value="Post Video"/>
            </form>
                
            
        )
    }
}

export default connect(null, {addPost})(PostsForm);