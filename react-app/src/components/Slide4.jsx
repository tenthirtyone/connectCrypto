/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import {
  Navbar,
} from 'react-bootstrap';

import MyMap from '../components/MyMap'


class Slide4 extends Component {
  render() {
    return (
      <div className="container-fixed">
        <div className="row">
          <h1>Demo for Project Connect</h1>
          <p>As a school and internet service provider, the user can see the current state of connectivity for the schools and regions that they are involved with.</p>
        </div>

        <div className="row">
          <div className="map-area">
            <MyMap></MyMap>
          </div>
        </div>

      </div>
    );
  }
}

export default Slide4;
