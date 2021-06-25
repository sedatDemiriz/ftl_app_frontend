// import React, { Component } from 'react';
// import { render } from 'react-dom';
// import './style.css'

const axios = require('axios')

axios.get('http://127.0.0.1:8000/api-runs/')
  .then(res => console.log(res.data.results))

// axios.get('127.0.0.1:8000/api-runs/').then(resp => {
//   console.log(resp.data);
// });

// async function makeGetRequest() {
//   let res = await axios.get('/api-runs')
//   let data = res.data
//   console.log(data)
// }

// makeGetRequest()