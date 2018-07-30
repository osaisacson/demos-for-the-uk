import React, { Component } from "react";
import { Button} from 'react-bootstrap';

export class Constituency extends Component {
  constructor(props) {
    super(props);
      this.findConstituency = this.findConstituency.bind(this);
      this.check = this.check.bind(this);
      this.state = {
        stream: ''
      };
  }
  findConstituency() {
let postcode = this.props.postcode;
    let url = `https://www.theyworkforyou.com/api/getConstituencypostcode=WA168NW?key=EC9gBPGKYoY4CH4z7QDgqPSS`;
fetch(url)
.then(res=> res.body)
.then(body => {
  const reader = body.getReader();
  console.log(reader.read())
  this.setState({stream: reader})
});

  }

  
  check() {
    console.log(this.state.stream)
  }

  render() {

    return (
      <div>
        <h2>this is the constiuency info page</h2>
        <Button onClick={this.findConstituency}>Click to learn more</Button>
        <h2>{this.props.postcode}</h2>
        <Button onClick={this.check}/>
      </div>
    );
  }
}
