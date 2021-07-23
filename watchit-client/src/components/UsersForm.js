import React, { Component } from 'react';

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
    render() {
        return (
            <form>
                <label>Username:</label>
                <input type='text' value={this.state.username} onChange={this.handleChange} name='username'/>
                    <br />
                <label>Email:</label>
                <input type='text' value={this.state.email} onChange={this.handleChange} name='email'/>
                    <br />
                <label>Password:</label>
                <input type='text' value={this.state.password} onChange={this.handleChange} name='password'/>
                    <br />
            </form>
        )
    }
}

export default UsersForm;