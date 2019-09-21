/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {
  Navbar,
} from 'react-bootstrap';


class Slide2 extends Component {
  render() {
    return (
      <div>
        <div className="container-fixed">
          <div className="row">
            <h1>Demo for Project Connect</h1>

            <div className="col-xs-12">
              <p>Demonstration of Phase 2 of the project</p>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="container-fixed">
          <div className="row">
            <h1>Scenario for the Demo</h1>

            <div className="col-xs-12">
              <p>At this stage of the project there are X amount of funds raised for the country.</p>
              <p>The bidding process is complete, and an internet service provider has been selected to get internet provided to this region.</p>
              <p>The country and internet service provider has agreed on a monthly rate and a minimum service guarantee.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slide2;
