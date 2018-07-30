import React, { Component } from 'react';
import axios from 'axios';

 export class Signup extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
    }
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
        <img alt="" src="images/uk-map.png" className="bg-image"></img>
        <div className="login-and-buttons">
          <div className="login-fields">
            <div>
              <label htmlFor="email"></label>
              <input placeholder="username" type="text" className="form-control"
                name="username" onChange={this.handleChange} />
            </div>
            <div>
              <label htmlFor="password"></label>
              <input placeholder="password" type="password" className="form-control"
                name="password" onChange={this.handleChange} />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Sign up</button>
        </div>
      </form>
    )
  }
}
