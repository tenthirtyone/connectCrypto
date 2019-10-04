/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { LineChart, XAxis, YAxis, CartesianGrid, Line, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';


class Learn6 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: [
        {
          date: '08-01',
          contractSpeed: 500,
          schoolSpeed: 0,
          ispSpeed: 2,
        },
        {
          date: '08-02',
          contractSpeed: 500,
          schoolSpeed: 200,
          ispSpeed: 2,
        },
        {
          date: '08-03',
          contractSpeed: 500,
          schoolSpeed: 600,
          ispSpeed: 2,
        },
      ],
      contractSpeed: 200,
    }
  }

  render() {
    return (
      <div className="container-fixed">
        <div className="row">
          <div className="col-xs-12">
            <h1>Under the hood</h1>
            <h3>The map for project connect is {'<>'}</h3>
          </div>

          <div className="col-xs-6 small">
            Chatter
          </div>
          <div className="col-xs-6">
            <ResponsiveContainer minHeight={400}>
              <LineChart data={this.state.chartData} >
                <XAxis dataKey='date' />
                <YAxis />
                <CartesianGrid stroke='#eee' strokeDasharray='5 5' />
                <Legend verticalAlign='bottom' height={60} />
                <ReferenceLine y={this.state.contractSpeed} stroke='#f6009d' strokeDasharray='5 5' />
                <Line name={'Contract Speed'} type='monotone' dataKey='contractSpeed' stroke='#f6009d' dot={false} />
                <Line name={'School Report'} type='monotone' dataKey='schoolSpeed' stroke='#ffbe00' />
                <Line name={'ISP Report'} type='monotone' dataKey='ispSpeed' stroke='#0072ff' />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div >
    );
  }
}

export default Learn6;
