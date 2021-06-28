import { useMemo, useEffect, useState } from 'react'
import { useTable } from 'react-table'

const axios = require('axios')

const RunsTable = () => {

    const [runsData, setrunData] = useState([])
    useEffect( () => {
        const fetchData = async () => {
            const response = await axios.get('http://127.0.0.1:8000/api-runs/')
            // console.log(response.data.results)
            setrunData(response.data.results)
        }
        fetchData()
    }, [])
        
    
    // Defining columns of the table
    // Datetime, username, diff, ship_used, result, scrap, ships, beacons, crew, 
    const columns = useMemo (
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
          accessor: 'scrap_collected',
        },
        {
          Header: 'Ships Defeated',
          accessor: 'ships_defeated',
        },
        {
          Header: 'Beacons Explored',
          accessor: 'beacons_explored',
        },
        {
          Header: 'Crew Hired',
          accessor: 'crew_hired',
        },
      ],
      []
    )

    // Defining data arows
    const data = useMemo(() => runsData, [runsData])

    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable({ columns, data })

    return (
      <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()} >{column.render('Header')}</th>))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>{row.cells.map(cell => {return (
                <td {...cell.getCellProps()} >
                    {cell.render('Cell')}
                </td>
                )})}
            </tr>
          )
        })}
      </tbody>
    </table>
    )
}

export default RunsTable