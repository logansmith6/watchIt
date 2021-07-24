import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions/postsActions';




class PostsForm extends Component {

    state = {
        title: '',
        description: '',
        video: ''
    }

   
    

    handleChange = event => {
        const {name, value} = event.target

        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.state.video = event.target.elements.video.value
        
        this.props.addPost(this.state)
        window.location.reload(true);
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
                        
                        onChange={this.handleChange}
                        id='playback'
                        type="hidden"
                        role="uploadcare-uploader"
                        data-public-key="50a37a21db13d5dd4bd7"
                        name="video" 
                        uuid={this.cdnUrl}
                        />
                    <br />
                    
                <input type="submit" value="Post Video"/>
            </form>
                
            
        )
    }
}

export default connect(null, {addPost})(PostsForm);