import React, { Component } from 'react';


class addUser extends Component {
    state = {
        name: '',
        email: '',
        password: ''
    }

    handleOnChange = event => {
        if (event.target.name === 'content'){
          this.setState({
            ...this.state,
            content: event.target.value
          })
        } else {
          this.setState({
            ...this.state,
            author: event.target.value
          })
        }
      }

    render() {
        return (
          <div className="container">
            <form>
                <textarea />
            </form>
          </div>
        );
      }
}