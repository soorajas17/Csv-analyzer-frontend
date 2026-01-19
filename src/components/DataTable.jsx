import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { getTableDataApi } from '../service/allApi'

function DataTable({ datasetId }) {

    const [rows, setRows] = useState([])

    const fetchData = async () => {
        const result = await getTableDataApi(datasetId)
        console.log(result);

        if (result.status === 200) {
            setRows(result.data)
        }
    }

    console.log(rows);

    useEffect(() => {
        if (datasetId) {
            fetchData()
        }
    }, [datasetId])

    return (
        <>
            <div className='border rounded p-3 '>
                <Table striped bordered hover responsive >
                    <thead className='table-light'>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Salary</th>
                            <th>Department</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.length > 0 ? (
                            rows.map((row, index) => (
                                <tr key={index}>
                                    <td>{row.name}</td>
                                    <td>{row.age}</td>
                                    <td>{row.salary}</td>
                                    <td>{row.department}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={4} className="text-center">
                                    No data available
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default DataTable
