/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {
  Navbar,
} from 'react-bootstrap';


class Learn4 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      speed: 90,
    }
  }
  render() {
    const {speed} = this.state;

    const setSpeed = (evt) => {
      this.setState({
        speed: evt.target.value,
      })
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
              <input type="text" placeholder="School Name" />
              <br />
              <label>Date</label><br />
              <input type="date" />
              <br />
              <label>Time</label><br />
              <input type="time" />
              <br />
              <label>Current Speed</label><br />
              <input type="range" min="1" max="100" value={speed} onChange={setSpeed} />
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
