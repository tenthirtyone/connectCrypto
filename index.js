const express = require('express');
const app = express();
const countries = require('./countries')
const school = require('./school.json')
const schools = require('./schools')

app.get('/schools/countries', (req, res) => {
  res.send(countries);
})

app.get('/schools/school/:school', (req, res) => {
  res.send(school);
})

app.get('/schools/countries/:id', (req, res) => {
  const {id} = req.params;
  console.log(id)
  console.log(schools[id.toLowerCase()])
  // Simulate response time while map moves - need FE optimization
  setTimeout(() => res.send(schools[id.toLowerCase()]), 1000)
})

app.listen(5000, () => {
  console.log('app listening on port 5000')
})