import React, { Component } from 'react';


class AddUser extends Component {
    state = {
        name: '',
        email: '',
        password: ''
    }

    handleOnChange = event => {
        
          this.setState({
            
            email: event.target.value
          })
      };

      handleOnSubmit = event =>  {
        event.preventDefault();
        this.setState({
          email: ''
        })
    };

    render() {
        return (
          <div className="container">
            <form onSubmit={this.handleOnSubmit} className="form-horizontal">
                <label>Email:</label>
                <textarea name="email" onChange={this.handleOnChange} value={this.state.email}/>
                   
                <button type="submit" className="btn btn-default">Add</button>
                
            </form>
          </div>
        );
      }
}

export default AddUser;