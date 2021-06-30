import React from 'react'
import { render } from 'react-dom'
import RunsTable from './RunsTable'

// render(
//   <RunsTable />,
//   document.getElementById('root')
// )

const App = () => {
  return <RunsTable />
}

render(
  <App />,
  document.getElementById('root')
)