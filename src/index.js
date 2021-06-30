// import React from 'react'
import { render } from 'react-dom'
import RunsTable from './RunsTable'
import ProfilePage from './ProfilePage'

const App = () => {
  return <RunsTable />
}

render(
  <ProfilePage username={'farb_clone'}/>,
  document.getElementById('root')
)