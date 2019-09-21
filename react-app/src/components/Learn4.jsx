/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {
  Navbar,
} from 'react-bootstrap';


class Learn4 extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h1>Learn how Project Connect works!</h1>
          </div>

          <div className="col-xs-6">
            <p>The ISP and the school will be writing to the blockchain with connectivity data at the same time. The string that they will be hashing and putting on chain will include two parts. The first part will be a color (red, yellow, green). The second part will be the date and time for when the information is to be written.</p>

            <p>The red / yellow / green part will be determined based on the current speed of the internet (based on sensors of some kind).  If it falls within any of the categories listed on the right, the corresponding color will show. The agreed upon speed is the internet service guarantee between schools and ISPs.</p>

            <p>The schools and internet service providers must post at the same time (thinking once per hour or once every 2 - 3 hours).</p>

            <p>When a post is to occur: </p>
            <p>- The information will be used to create a string (e.g. Red + 29-Sept-2019; 4:00 PM) </p>
            <p>- This information will be hashed; if the thresholds don’t match then the ISP and the schools will have different hashes</p>
            <p>- This creates an anomoly and will then drive a deduction to funds paid to ISPs</p>
          </div>
          <div className="col-xs-6">

          </div>

        </div>

      </div >
    );
  }
}

export default Learn4;
