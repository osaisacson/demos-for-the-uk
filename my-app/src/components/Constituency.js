import React, { Component } from 'react';


export class Constituency extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postcode: ''
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
    return "invalid";
  }
  else{
    return pc;
  }
}
handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
}

  render() {
    return (
      <div id="layout-content" className="layout-content-wrapper">
      <h2>enter your consituency</h2>
        <form onSubmit={this.validatePC}>
          <input type="text" onChange={this.handleChange}
          name="postcode"/>
        </form>
      </div>
    );
  }
}
