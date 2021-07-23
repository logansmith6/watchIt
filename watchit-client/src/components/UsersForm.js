import React, { Component } from 'react';

class UsersForm extends Component {

    state = {
        username: '',
        email: '',
        password: ''

    }
    render() {
        return (
            <form>
                <input type='text' value={this.state.name} onChange={this.handleChange} name='name'/>
            </form>
        )
    }
}

export default UsersForm;