/* eslint-disable no-unused-vars*/
import React, {
  Component,
} from 'react';
/* eslint-enable no-unused-vars*/
import './App.css';
// import {connect} from 'react-redux'
import Slide1 from './components/Slide1'
import Slide2 from './components/Slide2'
import Slide3 from './components/Slide3'

function CurrentSlide({number, setSlide}) {
  console.log(number)
  switch (number) {
    case 1:
      return (<Slide1 setSlide={setSlide}></Slide1>)
      break;
    case 2:
      return (<Slide2></Slide2>)
      break;
    case 3:
      return (<Slide3></Slide3>)
      break;
  }
}

/**
 * Main App
 */
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slide: 1,
    }
  }

  render() {
    const setSlide = (number) => {
      if (number >= 1 && number <= 3) {
        this.setState({
          slide: number,
        })
      }
    }
    return (
      <div>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" style={{display: this.state.slide > 1 ? '' : 'none'}} onClick={() => {
            setSlide(this.state.slide - 1)
          }}>BACK</a>
          <button className="navbar-brand btn-unicef right" href="#" style={{display: this.state.slide > 1 ? '' : 'none'}}
            onClick={() => {
              setSlide(this.state.slide + 1)
            }}>NEXT</button>
        </nav>

        <CurrentSlide number={this.state.slide} setSlide={setSlide}></CurrentSlide>

        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-bottom ">
          <div className="container">
            <div className="row">
              <div className="col-xs-4">
                <a className="" href="#" >CONTACT</a>
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