//container for users... methods and data

import React, { Component } from 'react';
//connect will allow use of actions
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/usersActions';
import UsersForm from './UsersForm';

class UsersContainer extends Component {

    constructor(props) {
        super(props);
        this.state = { 
          isLoggedIn: false,
          user: {}
         };
      }

      handleLogin = (data) => {
        this.setState({
          isLoggedIn: true,
          user: data.user
        })
      }
    handleLogout = () => {
        this.setState({
        isLoggedIn: false,
        user: {}
        })
      }

    loginStatus = () => {
        this.props.youUp()
    }

    componentDidMount() {
        this.props.fetchUsers()
        this.loginStatus()
    }
    
    render() {
        return (
            <div>
                Users Container
                <UsersForm />
            </div>
        );
    }
}

export default connect(null, { fetchUsers })(UsersContainer);
//this makes fetchUsers available to the container as a prop