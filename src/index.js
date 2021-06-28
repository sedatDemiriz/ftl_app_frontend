import React from 'react'
import { render } from 'react-dom'
import RunsTable from './RunsTable'

// const getData = async () => 
// await axios.get('http://127.0.0.1:8000/api-runs/')
// .then(
//   function(response) {
//     return response
//   }
// )

// async function getRunsResponse() {
//   axios.get('http://127.0.0.1:8000/api-runs/')
//   .then(function(response) {
//     return response.data.results
//   })
// }

render(
  <RunsTable />,
  document.getElementById('root')
)

// axios.get('127.0.0.1:8000/api-runs/').then(resp => {
//   console.log(resp.data);
// });

// async function makeGetRequest() {
//   let res = await axios.get('/api-runs')
//   let data = res.data
//   console.log(data)
// }

// makeGetRequest()