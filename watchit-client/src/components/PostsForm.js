import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions/postsActions';
import Dropzone from 'react-dropzone'



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
                    <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                        {({getRootProps, getInputProps}) => (
                <section>
                    <div {...getRootProps()}>
                    <input {...getInputProps()} value={this.state.acceptedFiles} onChange={this.handleChange} name='video'/>
                    <p>Drag 'n' drop some files here, or click to select files</p>
                    </div>
                    </section>
                        )}
                    </Dropzone>
                    <br />
                    
                <input type="submit" value="Post Video"/>
            </form>
                
            
        )
    }
}

export default connect(null, {addPost})(PostsForm);