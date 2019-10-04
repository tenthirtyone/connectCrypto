/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {
  Navbar,
} from 'react-bootstrap';
import * as shajs from 'sha.js';


class Learn4 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      school: 'School Name',
      date: '',
      time: '',
      speed: 90,
      hash: '0x1da51b8d8ff98f6a48f80ae79fe3ca6c26e1abb7b7d125259255d6d2b875ea08',
    }
  }

  render() {
    const {school, date, time, speed, hash} = this.state;

    const setHash = () => {
      const sha256 = shajs('sha256');
      sha256.update(`${school + date + time + speed}`)

      this.setState({
        hash: '0x' + sha256.digest('hex'),
      })
    }

    const setSpeed = (evt) => {
      this.setState({
        speed: evt.target.value,
      });
      setHash();
    }

    const setDate = (evt) => {
      this.setState({
        date: evt.target.value,
      })
      setHash();
    }

    const setTime = (evt) => {
      this.setState({
        time: evt.target.value,
      })
      setHash();
    }

    const setSchool = (evt) => {
      this.setState({
        school: evt.target.value,
      })
      setHash();
    }

    return (
      <div className="container-fixed">
        <div className="row">
          <div className="col-xs-12">
            <h1>Try it out!</h1>
            <p>The agreed speed for this demo is 10GiB.  Try updating the information below to see how diagram on the right changes based on the information provided.</p>
          </div>

          <div className="col-xs-6">
            <form>
              <label>School Name</label><br />
              <input type="text" placeholder="School Name" onChange={setSchool} />
              <br />
              <label>Date</label><br />
              <input type="date" onChange={setDate} />
              <br />
              <label>Time</label><br />
              <input type="time" onChange={setTime} />
              <br />
              <label>Current Speed</label><br />
              <input type="range" min="1" max="100" className="slider" value={speed} onChange={setSpeed} />
              <label>Cryptographic Hash</label><br />
              <label>{school} + {date || 'date'} + {time || 'time'} + {speed}</label><br />
              {hash}
            </form>

          </div>
          <div className="col-xs-6">
            <div className={`row underline ${speed <= 80 ? '' : 'dimmed'}`}>
              <div className="col-xs-4 red square">
                Red
              </div>
              <div className="col-xs-8 text-drop">
                Internet speed has dropped > 20% of agreed speed
              </div>
            </div>
            <div className={`row underline ${speed < 90 && speed > 80 ? '' : 'dimmed'}`}>
              <div className="col-xs-4 yellow square">
                Yellow
              </div>
              <div className="col-xs-8 text-drop">
                Internet speed {`<`} 10% - 20 % of agreed speed
              </div>
            </div>
            <div className={`row underline ${speed >= 90 ? '' : 'dimmed'}`}>
              <div className="col-xs-4 green square">
                Green
              </div>
              <div className="col-xs-8 text-drop">
                Internet speed is within 10% of agreed speed
              </div>
            </div>
          </div>

        </div>

      </div >
    );
  }
}

export default Learn4;
