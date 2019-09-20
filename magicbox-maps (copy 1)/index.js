const express = require('express');
const app = express();
const countries = require('./countries')
const COL = require('./COL.json')
const BRA = require('./BRA.json')
const PER = require('./PER.json')
const BOL = require('./BOL.json')
const CHL = require('./CHL.json')
const ARG = require('./ARG.json')
const school = require('./school.json')

app.get('/schools/countries', (req, res) => {
  res.send(countries);
})

app.get('/schools/school/:school', (req, res) => {
  res.send(school);
})

app.get('/schools/countries/:id', (req, res) => {
  const {id} = req.params;

  // Simulate response time while map moves - need FE optimization
  setTimeout(() => {
    switch (id) {
    case 'COL':
      return res.send(COL);
      break;
    case 'BRA':
      return res.send(BRA);
      break;
    case 'PER':
      return res.send(PER)
      break;
    case 'BOL':
      return res.send(BOL)
      break;
    case 'CHL':
      return res.send(CHL)
      break;
    case 'ARG':
      return res.send(ARG)
      break;
    default:
      break;
    }
  }, 1000)
})

app.listen(5000, () => {
  console.log('app listening on port 5000')
})