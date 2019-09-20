/* eslint-disable no-unused-vars*/
import React, {
  Component,
} from 'react';
/* eslint-enable no-unused-vars*/
import './App.css';
// import {connect} from 'react-redux'
import MyMap from './components/MyMap'
import Slide1 from './components/Slide1'
/**
 * Main App
 */
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slide: 0,
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" style={{display: this.state.slide > 0 ? '' : 'none'}}>BACK</a>
          <button className="navbar-brand btn-unicef right" href="#" style={{display: this.state.slide > 0 ? '' : 'none'}}>NEXT</button>
        </nav>
        <Slide1></Slide1>


        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-bottom ">
          <div className="container">
            <div className="row">
              <div className="col-xs-4">
                <a className="" href="#">CONTACT</a>
              </div>
              <div className="col-xs-4">
                <a className="" href="#">ABOUT</a>
              </div>
              <div className="col-xs-4">
                <a className="" href="#">TWITTER</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Dashboard;