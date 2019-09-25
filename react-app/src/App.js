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
import Learn1 from './components/Learn1'
import Learn2 from './components/Learn2'
import Learn3 from './components/Learn3'
import Learn4 from './components/Learn4'
import Learn5 from './components/Learn5'
import Learn6 from './components/Learn6'

function CurrentSlide({ mode, number, setSlide, setLearnMore, setMode }) {
  if (mode === 'demo') {
    switch (number) {
      case 1:
        return (<Slide1 setSlide={setSlide} setMode={setMode}></Slide1>)
        break;
      case 2:
        return (<Slide2></Slide2>)
        break;
      case 3:
        return (<Slide3 setLearnMore={setLearnMore}></Slide3>)
        break;
    }
  } else if (mode === 'learn') {
    switch (number) {
      case 2:
        return (<Learn1 ></Learn1>)
        break;
      case 3:
        return (<Learn2 ></Learn2>)
        break;
      case 4:
        return (<Learn3 ></Learn3>)
        break;
      case 5:
        return (<Learn4 ></Learn4>)
        break;
      case 6:
        return (<Learn5 ></Learn5>)
        break;
        break;
      case 7:
        return (<Learn6 ></Learn6>)
        break;
    }
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
      learnMore: false,
      mode: 'demo',
    }
  }

  render() {
    const setSlide = async (number) => {
      if (number >= 1 && number <= 7) {
        await this.setState({
          slide: number,
        })
      }
    }

    const setLearnMore = async (val) => {
      await this.setState({
        learnMore: Boolean(val),
      })
    }

    const setMode = async (mode) => {
      await this.setState({
        mode: mode,
      })
    }

    return (
      <div>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" style={{ display: this.state.slide > 1 ? '' : 'none' }} onClick={() => {
            setLearnMore(false)
            setMode('demo');
            setSlide(1);
          }}>BACK</a>
          <button className="navbar-brand btn-unicef right" href="#" style={{ display: (this.state.slide === 2 && this.state.mode === 'demo') || this.state.mode === 'learn' ? '' : 'none' }}
            onClick={() => {
              setLearnMore(false)
              setSlide(this.state.slide + 1)
            }}>NEXT</button>
          <button className="navbar-brand btn-unicef btn-learn-more right" href="#" style={{ display: this.state.learnMore === true ? '' : 'none' }}
            onClick={() => {
              setLearnMore(false)
              setMode('learn');
              setSlide(2);
            }}>LEARN MORE</button>
        </nav>

        <CurrentSlide mode={this.state.mode} number={this.state.slide} setSlide={setSlide} setLearnMore={setLearnMore} setMode={setMode}></CurrentSlide>

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