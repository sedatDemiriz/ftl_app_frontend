import React, { Component } from 'react';
import { render } from 'react-dom';
import { useTable } from 'react-table';

const axios = require('axios')

// class Test extends Component {
//   render() {
//     return <h1>Hello {this.props.name}</h1>
//   }
// }

// const element = <Test name='Sedat'/>

// const getData = async () => 
// await axios.get('http://127.0.0.1:8000/api-runs/')
// .then(
//   function(response) {
//     return response
//   }
// )

async function getRunsResponse() {
  const response = await axios.get('http://127.0.0.1:8000/api-runs/')
  // console.log(response.data)
  return response.data
}

const test = getRunsResponse()

// getData().then(response => response)

function App(props) {

    console.log(props)
    // Defining columns of the table
    // Datetime, username, diff, ship_used, result, scrap, ships, beacons, crew, 
    const columns = React.useMemo (
      () => [
        {
          Header: 'Submitted at',
          accessor: 'datetime',
        },
        {
          Header: 'Player',
          accessor: 'username',
        },
        {
          Header: 'Difficulty',
          accessor: 'difficulty',
        },
        {
          Header: 'Ship Used',
          accessor: 'ship_used',
        },
        {
          Header: 'Result',
          accessor: 'result',
        },
        {
          Header: 'Scrap Collected',
          accessor: 'scrap',
        },
        {
          Header: 'Ships Defeated',
          accessor: 'ships',
        },
        {
          Header: 'Beacons Explored',
          accessor: 'beacons',
        },
        {
          Header: 'Crew Hired',
          accessor: 'crew',
        },
      ],
      []
    )

    // Defining data arows
    const data = React.useMemo(
    () => [
      {
        col1: props.datetime,
        col2: props.username,
        col3: props.difficulty,
        col4: props.ship_used,
        col5: props.result,
        col6: props.scrap_collected,
        col7: props.ships_defeated,
        col8: props.beacons_explored,
        col9: props.crew_hired,

      },
    ],
    [props.datetime, props.username, props.difficulty, props.ship_used, props.result, props.scrap_collected, props.ships_defeated, props.beacons_explored, props.crew_hired]
    )

    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable(
          { columns, 
            data 
          }
        )

    return (
      <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps()}
                style={{
                  borderBottom: 'solid 3px red',
                  background: 'aliceblue',
                  color: 'black',
                  fontWeight: 'bold',
                }}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: '10px',
                      border: 'solid 1px gray',
                      background: 'papayawhip',
                    }}
                  >
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
    )
}

render(
  <App data={ test.data }/>,
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