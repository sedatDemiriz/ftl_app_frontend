import React from 'react'
import { render } from 'react-dom'
import LoginForm from './Login'
import RunsTable from './RunsTable'

// render(
//   <RunsTable />,
//   document.getElementById('root')
// )

const App = () => {
  return <RunsTable />
}

render(
  <LoginForm />,
  document.getElementById('root')
)