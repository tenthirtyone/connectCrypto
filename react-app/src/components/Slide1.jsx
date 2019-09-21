/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {
  Navbar,
} from 'react-bootstrap';


class Slide1 extends Component {
  render() {
    const {setSlide, setMode} = this.props;
    return (
      <div className="container-fixed">
        <div className="row">
          <h1>Welcome to Project Connect</h1>

          <div className="col-xs-12">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisinuli.</p>
          </div>
        </div>
        <div className="row">
          <div class="col-md-3 offset-md-3">
            <button className="btn-unicef btn-nav" href="#" onClick={() => {
              setMode('demo');
              setSlide(2);
            }}>DEMO 1 FINANCE</button>
          </div>
          <div class="col-md-3">
            <button className="btn-unicef btn-nav" href="#" onClick={() => {
              setMode('learn');
              setSlide(2);
            }}>LEARN MORE</button>
          </div>
        </div>
        <div className="row">
          <div class="col-md-3 offset-md-3">
            <button className="btn-unicef btn-nav" href="#">DEMO 2 MANAGEMENT</button>
          </div>
          <div class="col-md-3">
            <button className="btn-unicef btn-nav" href="#">LEARN MORE</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Slide1;
