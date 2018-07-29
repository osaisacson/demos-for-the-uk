import React, { Component } from 'react';
import axios from 'axios';


export class Constituency extends React.Component {
  constructor(props) {
    super(props);

    this.state = {person: []};
  }

  componentDidMount() {
    this.UserList();
  }

  UserList() {
    axios.get('https://www.theyworkforyou.com/api/getConstituency')
      .then((results) => {JSON.parse(results)})
      .then(res=> console.log(res))
  }

  render() {
    const persons = this.state.person.map((item, i) => (
      <div>
        <h1>{ item.name.first }</h1>
        <span>{ item.cell }, { item.email }</span>
      </div>
    ));

    return (
      <div id="layout-content" className="layout-content-wrapper">
        <div className="panel-list">{ persons }</div>
      </div>
    );
  }
}
