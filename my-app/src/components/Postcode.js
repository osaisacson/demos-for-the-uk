import React, { Component } from 'react';
import {Constituency} from './Constituency'


export class Postcode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postcode: '',
      logged: false,
    };

this.validatePC = this.validatePC.bind(this)
this.handleChange = this.handleChange.bind(this)
  }

validatePC(e){
e.preventDefault()
let pc = this.state.postcode.toUpperCase().replace(/\s+/g, "");
pc = pc.replace(/\-/g, "");
  const valid = /[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}/i;
  const ok = valid.test(pc);
  if (!ok){
    alert('thats not a proper post code')
    return "invalid";
  }
  else{
    this.setState({logged: true});
    return pc;
  }
}
handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
}

  render() {

  return  !this.state.logged ?

      <div id="layout-content" className="layout-content-wrapper">
      <h2>enter your consituency</h2>
        <form onSubmit={this.validatePC}>
          <input type="text" onChange={this.handleChange}
          name="postcode"/>
        </form>
      </div> : <Constituency postcode={this.state.postcode}/>

  }
}
