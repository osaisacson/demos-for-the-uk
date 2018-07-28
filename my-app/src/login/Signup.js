import React, { Component } from 'react';
import axios from 'axios';

 export class Signup extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
    },
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleChange(e) {
      this.setState({[e.target.name]: e.target.value})
  }
  handleSubmit(e) {
    e.preventDefault();
axios.post(`http://localhost:3090/signup`, this.state)
.then((response)=>{
  console.log(response);
})
.catch((error)=>{
  console.log(error);
})
  }

  render() {
    return (
      <form className="demoForm" onSubmit={this.handleSubmit}>
        <h2>Sign up</h2>
        <div className="form-group">
          <label htmlFor="email">Username</label>
          <input type="text" className="form-control"
            name="username" onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control"
            name="password" onChange={this.handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">
           Sign up
        </button>
      </form>
    )
  }
}
