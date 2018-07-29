import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Signup } from './login/Signup';
import { Home } from './components/home';
require('./styles/App.scss');


class App extends Component {
  render() {
    return (
      <Router>
        <div>

        <Route exact path="/Home" component={Home}/>
        <Route exact path="/" component={Signup}/>
        </div>
      </Router>
    );
  }
}

export default App;

// CODE FOR MAIN VIEW

// /* global localStorage */
// var React = require('react');
// var Link = require('react-router').Link;
// // required for ajax calls
// var axios = require('axios');
// var Parse = require('parse');
// var $ = require('jquery');
// var IndexLink = require("react-router").IndexLink;
// import { withRouter } from 'react-router';
// var event = require('../events.js');
// //var Vote = Parse.Object.extend('Vote');


// var Rep = React.createClass({
//   getInitialState: function() {
//     // set inital state as an empty object, to be populated with rep info on componentDidMount
//     return {
//       hansard: {
//         topic: "Healthcare",
//         title: "Business of the house: Diabetes",
//         comment: "Does my hon. Friend agree that groups such as the Bristol South Diabetes Support Group are really important in bringing together volunteers to support people across the country? Does she support those volunteers, who not only supplement the work of the NHS but give people the confidence to manage their work?",
//         agree: "",
//         disagree: "",
//       },
//       rep: {
//         name: "",
//         constituency: "",
//         province: "",
//         party: "",
//         img: "",
//         electedYear: "",
//         electedVote: ""
//       },
//       coherence: '',
//       bill: {
//         id: '' ,
//         title: '',
//         summary: '',
//         text: '',
//         status: '',
//         recentVote: '' ,
//         lastVote: '',
//         proposedBy: '',
//         partyOfSponsor: '',
//         repsVote: '' ,
//         date: '',
//         textUrl: ''
//       },
//       content: "",
//       vote: 0,
//       voteInText: "Not voted yet",
//       greenBtnToggle: "greenbutton",
//       redBtnToggle: "redbutton"
//     };
//   },
//   componentDidMount: function() {
//     var that = this;
//     that.setState({rep: that.props.location.state.allRepData});
//   },

//   loadBillData: function() {
//     var that = this;
//     // set billId as url parameter
//     var billId = this.props.params.billId;
//     // msg whilst data loads
//     this.setState({loading: true});

//     // post billId and repName to server and this.setState({bill: response.data})
//     var repName = localStorage.getItem("repName");
//     axios.post('/billinfoget', {
//       billId: billId,
//       repName: repName
//     })
//     .then(function(response) {
//       that.setState({bill: response.data, loading: false});
//     })
//     .then(function() {
//       that.setState({content: that.state.bill.title});
//     })
//     .catch(function(response) {
//       console.log(response, 'response');
//     });


//     var vote = this.getUserVote();

//     if (vote === 1) {
//       that.setState({
//         greenBtnToggle: "greenbutton-clicked",
//         redBtnToggle: "inactive-button",
//         vote: 1
//       });
//     }
//     if (vote === -1) {
//       that.setState({
//         greenBtnToggle: "inactive-button",
//         redBtnToggle: "redbutton-clicked",
//         vote: -1
//       });
//     }
//   },
//   handleGBtnClick: function(e) {
//     e.preventDefault();
//     var vote = {billId: this.props.params.billId};

//     if (this.state.greenBtnToggle === "greenbutton") {
//       this.setState({greenBtnToggle:"greenbutton-clicked", redBtnToggle:"inactive-button", vote: 1});
//       vote.vote = 0;
//       //Parse.Cloud.run('handleVote',  vote);
//     }
//     if (this.state.greenBtnToggle === "inactive-button") {
//       this.setState({greenBtnToggle:"greenbutton-clicked", redBtnToggle:"inactive-button", vote: 1});
//       vote.vote = 1;
//       //Parse.Cloud.run('handleVote', vote);
//     }
//     if (this.state.greenBtnToggle === "greenbutton-clicked") {
//       this.setState({greenBtnToggle:"greenbutton", redBtnToggle:"redbutton", vote: 0});
//       vote.vote = 1;
//       //Parse.Cloud.run('handleVote', vote);
//     }

//     this.saveUserVote(vote);
//   },
//   handleRBtnClick: function(e) {
//     e.preventDefault();
//     var vote = {billId: this.props.params.billId};
//     if (this.state.redBtnToggle === "redbutton") {
//       this.setState({redBtnToggle:"redbutton-clicked", greenBtnToggle: "inactive-button", vote: -1});
//       vote.vote = 0;
//       //Parse.Cloud.run('handleVote', vote);
//     }
//     if (this.state.redBtnToggle === "inactive-button") {
//       this.setState({redBtnToggle:"redbutton-clicked", greenBtnToggle: "inactive-button", vote: -1});
//       vote.vote = 0;
//       //Parse.Cloud.run('handleVote', vote);
//     }
//     if (this.state.redBtnToggle === "redbutton-clicked") {
//       this.setState({redBtnToggle:"redbutton", greenBtnToggle:"greenbutton", vote: 0});
//       vote.vote = -1;
//       //Parse.Cloud.run('handleVote', vote);
//     }

//     this.saveUserVote(vote);
//   },

//   saveUserVote: function(vote) {
//     var billId = vote.billId;
//     var value = vote.vote;

//     window.localStorage.setItem(`bill-vote_${billId}`, value);
//   },
//   getUserVote: function() {
//     var {billId} = this.props.params;

//     var vote = window.localStorage.getItem(`bill-vote_${billId}`);

//     if (vote) {
//       return Number(vote);
//     } else {
//       return 0;
//     }
//   },

//   render: function() {
//     console.log(this.props, 'this.props');
//     console.log(this.state, 'this state');
//     // Representative Link
//     var repLink;
//     var feedLink;
//     var repName = localStorage.getItem('repName');
//     if (repName) {
//       repLink = '/rep/'+repName;
//       feedLink = '/rep/'+repName+'/feed';
//     }
//     else {
//       repLink = '/';
//       feedLink = '/';
//     }
//     return (
//     <div className="repPage">
//       <div className="centered-container">
//         <div className="top-h2">{this.state.rep.full_name}</div>
//         <div className="sub-h2">SPEAKS FOR YOU</div>
//         <Link activeClassName="active" to={repLink}>
//           <img src="https://www.theyworkforyou.com/images/mpsL/25411.jpeg" alt="" className="left-side-pic-link" />
//         </Link>
//         <div className="percent-low red-color">-4%</div>
//         <img src={'https://www.theyworkforyou.com/' + this.state.rep.image} alt="https://api.openparliament.ca/media/polpics/marc-miller.jpg" className="round-image" />
//         <Link activeClassName="active" to ="/repbetter">
//           <img src="https://www.theyworkforyou.com/images/mpsL/25320.jpeg" alt="" className="right-side-pic-link" />
//         </Link>
//         <div className="percent-high green-color">+5%</div>
//         <div className={"party" + this.state.rep.party.substring(0, 3)}>{this.state.rep.party}</div>

//         <div className="white-bg-section">
//           <p>{this.state.rep.constituency}</p>
//           <p>Entered house {this.state.rep.entered_house} <br/>through {this.state.rep.entered_reason}</p>
//         </div>

//         <div className="light-grey-bg-color bubble large-bubble">
//             <div className="bubble-text">you agree</div><br/>
//             <div className="bubble-value red-color">{this.state.coherence.length > 1 ? this.state.coherence : '17'}<span className="percent red-color">%</span></div>
//         </div>
//         <br/>

//         <div className="main-title-box">
//           <div className="category-header">Recent Debates</div>
//           <p className="category-description">Debates in the House of Commons are an opportunity for MPs from all parties to scrutinise government legislation and raise important local, national or topical issues.
//           <br/>And sometimes to shout at each other.
//           </p>
//         </div>
//         <div className="back-line"></div>

//         <div className="debate-one">
//           <div className="topic-title-box">
//             <div className="topic-header">Uk/EU Future Economic Partnership</div>
//             <div className="topic-description">– in the House of Commons at 3:34 pm on 5th March 2018.</div>
//           </div>

//           <div className="statement-box">
//             <div className="statement-header-and-body">
//               <div className="statement-header">
//                 <img src="https://www.theyworkforyou.com/images/mps/10426.jpg" alt="" />
//                 <div>
//                   <div className="name-of-speaker">Theresa May</div>
//                   <p className="title-of-speaker">The Prime Minister <br/>Leader of the Conservative Party</p>
//                 </div>
//               </div>
//               <p className="statement-body">
//               With permission, Mr Speaker, I shall make a statement on our future economic partnership with the European Union. In December we agreed the key elements of our departure from the EU, and we are turning that agreement into draft legal text. We have made clear our concerns about the first draft that the Commission published last week, but no one should doubt our commitment (...)
//               </p>
//             </div>
//             <div className="btn-container">
//               <div onClick={this.handleRBtnClick} className={this.state.redBtnToggle}></div>
//               <div onClick={this.handleGBtnClick} className={this.state.greenBtnToggle}></div>
//             </div>
//           </div>

//           <div className="statement-box">
//             <div className="statement-header-and-body">
//               <div className="statement-header">
//                 <img src="https://www.theyworkforyou.com/images/mpsL/10040.jpeg" alt="" />
//                 <div>
//                   <div className="name-of-speaker">John Bercow</div>
//                   <p className="title-of-speaker">Speaker of the House of Commons</p>
//                 </div>
//               </div>
//               <p className="statement-body">
//              Order. A very considerable level of orchestrated heckling is taking place in the House, including heckling from some Members who will doubtless later grin at me and seek to catch my eye. They may find that there is a clash between the two. We should set a good example that will impress our dear and loyal Canadian friends, and indeed, for that matter, the British people. The House can rest assured that I will allow the maximum possible questioning and scrutiny on this occasion, as I always do, but the Prime Minister is entitled to be heard with courtesy. (...)
//               </p>
//             </div>
//             <div className="btn-container">
//               <div onClick={this.handleRBtnClick} className={this.state.redBtnToggle}></div>
//               <div onClick={this.handleGBtnClick} className={this.state.greenBtnToggle}></div>
//             </div>
//           </div>

//           <div className="statement-box">
//             <div className="statement-header-and-body">
//               <div className="statement-header">
//                 <img src="https://www.theyworkforyou.com/images/mpsL/10180.jpeg" alt="" />
//                 <div>
//                   <div className="name-of-speaker">Iain Duncan Smith</div>
//                   <p className="title-of-speaker">Conservative <br/>Chingford and Woodford Green</p>
//                 </div>
//               </div>
//               <p className="statement-body">
//               I congratulate my right hon. Friend on what I thought was an excellent speech—clear and determined, giving the European Union a very clear sense of direction. I thought that perhaps the most important point in the speech—the point voted on in the referendum—was about taking back control, so does she agree that bringing back to a British Parliament all decisions about our arrangements is exactly about delivering on that? When she gets into negotiations about trade arrangements with her European counterparts, will she remind them that cake exists to be eaten and cherries exist to be picked?
//               </p>
//             </div>
//             <div className="btn-container">
//               <div onClick={this.handleRBtnClick} className={this.state.redBtnToggle}></div>
//               <div onClick={this.handleGBtnClick} className={this.state.greenBtnToggle}></div>
//             </div>
//           </div>

//           <div className="statement-box">
//             <div className="statement-header-and-body">
//               <div className="statement-header">
//                 <img src="https://www.theyworkforyou.com/images/mpsL/25390.jpeg" alt="" />
//                 <div>
//                   <div className="name-of-speaker">Karin Smyth</div>
//                   <p className="title-of-speaker">Labour <br/>Bristol South</p>
//                 </div>
//               </div>
//               <p className="statement-body">
//   The Prime Minister said today that no one should doubt our commitment to the entirety of the joint report published in December. With regard to Ireland, paragraph 47 of the joint report stated:
//   “The two Parties have carried out a mapping exercise, which shows that North-South cooperation relies to a significant extent on a common European Union legal and policy framework.”
//   Will she commit to publishing that mapping exercise?
//   </p>
//             </div>
//             <div className="btn-container">
//               <div onClick={this.handleRBtnClick} className={this.state.redBtnToggle}></div>
//               <div onClick={this.handleGBtnClick} className={this.state.greenBtnToggle}></div>
//             </div>
//           </div>
//         </div>

//         <div className="back-line"></div>





//         <div className="back-line"></div>
//         <div className="bubble-container-x-small">
//           <Link activeClassName="active" className="light-grey-bg-color full-bubble" onClick={this.onMenuItemClick} to="/">Logout</Link>
//         </div>

//         </div>
//       </div>
//     );
//   }
// });

// module.exports = Rep;






















// /* CODE FOR LOGIN*/


// /* global localStorage */
// var React = require('react');
// var axios = require('axios');
// import { withRouter } from 'react-router';
// var formattedPc = require("../helperFunctions/validatePc.js");
// var event = require('../events');
// var Message = require('./InvalidPcMessage');


// var Login = React.createClass({
//   getInitialState: function () {
//     return{
//       invalidPostalCode: ""
//     };
//   },
//   //we receive the postal code, we call formattedPc to be sure it is in a valid format, we do an ajax call to the backend, sending it a valid postal code and fetching the appropriate formatted MP name
//   handleSubmit: function(e) {
//     e.preventDefault();
//     var that = this;

//     // check if the postal code is in a valid format
//     var pc = this.refs.postalcode.value;
//     var userPostalCode = formattedPc.validatePC(pc);
//     console.log('HERE', userPostalCode);

//     // show an error message if the user has not entered a postal code in a valid format
//     if (userPostalCode === "invalid") {
//       this.setState({invalidPostalCode: "alert"});
//       event.emit('show_message', {message:"Enter a valid postal code"});
//     }


//     // send the server a valid postal code and fetch the appropriate formatted MP name
//     else {
//       axios.post('/repnameget', {
//         postalcode: userPostalCode
//       })
//       .then(function(response) {
//         //this needs adapting, not doing anything right now
//         if(response.data === "invalid") {
//           that.setState({invalidPostalCode: "alert"});
//           event.emit('show_message', {message:"There is no constituency associated with your postal code."});
//         }
//         else {
//           var repName = response.data.allRepData.full_name.replace(" ","-").toLowerCase();
//           var path = '/rep/' + repName;
//           // store 'repName' in the browser cache
//           console.log("RESPONSE", response)
//           localStorage.setItem('repName', response.data.allRepData);

//           // redirect to the path of rep/your-rep-name
//           // that.props.router.push(path);
//           that.props.router.push({
//             pathname: path,
//             state: {allRepData: response.data.allRepData}
//           });
//         }
//       })
//       .catch(function(response) {
//         console.log(response, 'response');
//       });
//     }
//   },
//   render: function() {
//     // user enters postalcode and rep's name is retrieved from Represent API - https://represent.opennorth.ca/api/
//     return (
//     <div>
//       <img alt="" src="images/uk-map.png" className="bg-image"></img>

//       <div className="login-page">
//         <div className= "citizenlogo">
//           <img alt="citizen app logo" src="images/citizenlogo.png"></img>
//         </div>

//         <div className="intro">
//             <p>In a democracy you elect someone to make decisions for you.
//             <br/>Find out what they're currently doing in your name.</p>
//             <h1>WHO'S REPRESENTING ME?</h1>
//             <h3>UK</h3>
//         </div>

//         <form onSubmit={this.handleSubmit}>
//           <div className="postcodeinputandentry">
//             <div className="login-field">
//               <input ref="postalcode" className={"postcodeinput " + this.state.invalidPostalCode } type="text" name="postalcode" maxLength="7" placeholder="enter your postal code (eg. BS3 1QP)" />
//             </div>
//             <div className="login-field">
//               <button className="postcodebutton" type="submit">FIND OUT</button>
//             </div>
//           <Message/>
//           </div>
//         </form>
//        </div>
//       </div>
//     );
//   }
// });

// //marker
// module.exports = withRouter(Login);
