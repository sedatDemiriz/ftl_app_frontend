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

const getData = async () => await axios.get('http://127.0.0.1:8000/api-runs/')

getData().then(response => console.log(response.data.results))

function App() {

    // Defining data arows
    const data = React.useMemo(
    () => [
      {
        col1: 'Hello',
        col2: 'World',
      },
      {
        col1: 're',
        col2: 'act',
      },
      {
        col1: 'ta',
        col2: 'ble',
      },
    ],
    []
    )
  
    // Defining columns of the table
    const columns = React.useMemo (
      () => [
        {
          Header: 'Column 1',
          accessor: 'col1',
        },
        {
          Header: 'Column 2',
          accessor: 'col2',
        },
      ],
      []
    )
    

    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable({ columns, data })

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
  <App />,
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