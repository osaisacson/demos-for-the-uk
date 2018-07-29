import React, { Component } from 'react';


export class Constituency extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mp: []
    };

this.consitituencyList = this.consitituencyList.bind(this)
this.list = this.list.bind(this)
  }
componentDidMount() {
  this.consitituencyList();
}
  consitituencyList() {
    fetch("http://lda.data.parliament.uk/members.json?_view=members&_pageSize=5&_page=0")
      .then(res => res.json())
      .then(res=> {
        let mpData = res.result.items;
        mpData.forEach(el => {
          let newMp = {
            fullname: el.fullName,
            homepage: el.homePage,
            twitter: el.twitter,
          };
          console.log(newMp);
          this.setState({ mp: this.state.mp.concat(newMp)})
        })
      })
      console.log(this.state.mp)
  }
  list(e){
    e.preventDefault();
    console.log(this.state.mp)
  }

  render() {
    return (
      <div id="layout-content" className="layout-content-wrapper">
      <h2>enter your consituency</h2>
        <form onSubmit={this.consitituencyList}>
        <button onClick={this.list}>click me</button>
          <input type="text"
          name="constituency"/>
        </form>
      </div>
    );
  }
}
