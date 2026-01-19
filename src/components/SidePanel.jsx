import React, { useState }  from 'react'
import { Button, Form } from 'react-bootstrap'
import {  getColumsApi } from '../service/allApi'


function SidePanel({ datasetId,selectedColumn, setSelectedColumn,setShowHistogram  }) {

    const [stats, setStats] = useState(null)

    const fetchStats = async () => {

        if (!datasetId) {
            alert("Upload CSV first")
            return
        }

        const result = await getColumsApi(datasetId, selectedColumn)
        console.log(result);
        if (result.status === 200) {
            setStats(result.data)
        }
    }

    return (
        <>
            <div className='p-3'>
                <h2>Column Statistics</h2>
                <Form.Group>
                    <Form.Label>Select Column</Form.Label>
                    <Form.Select
                        value={selectedColumn}
                        onChange={(e) => setSelectedColumn(e.target.value)}
                    >
                        <option value="age">Age</option>
                        <option value="salary">Salary</option>
                    </Form.Select>
                </Form.Group>

                <Button onClick={fetchStats} variant='info' className='w-100 mb-2 mt-2 text-white'> Get Statics </Button>
                <Button onClick={()=>setShowHistogram(true)} variant='secondary' className='w-100 '> Show Histogram </Button>

                { stats &&(
                    <div className="mt-3 bg-light">
                    <p className='mt-3'><strong>Type:</strong> {stats.type}</p>
                    <p><strong>Missing:</strong>{stats.missing}</p>
                    <p><strong>Min:</strong> {stats.min}</p>
                    <p><strong>Max:</strong> {stats.max}</p>
                    <p><strong>Mean:</strong> {stats.mean}</p>
                    <p><strong>Median:</strong> {stats.median}</p>
                    <p><strong>Mode:</strong> {stats.mode}</p>
                </div>
                )}
            </div>
        </>
    )
}

export default SidePanel
