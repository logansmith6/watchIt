import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../actions/usersActions';

class UsersForm extends Component {

    state = {
        username: '',
        email: '',
        password: ''

    }

    handleChange = event => {
        const {name, value} = event.target

        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.addUser(this.state)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Username:</label>
                <input type='text' value={this.state.username} onChange={this.handleChange} name='username'/>
                    <br />
                <label>Email:</label>
                <input type='text' value={this.state.email} onChange={this.handleChange} name='email'/>
                    <br />
                <label>Password:</label>
                <input type='text' value={this.state.password} onChange={this.handleChange} name='password'/>
                    <br />
                <input type="submit" value="Create Account"/>
            </form>
        )
    }
}

export default connect(null, {addUser})(UsersForm);