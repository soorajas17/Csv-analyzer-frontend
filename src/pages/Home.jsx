import React, { useState } from 'react'
import Upload from '../components/Upload'
import DataTable from '../components/DataTable'
import SidePanel from '../components/SidePanel'
import Histogram from '../components/Histogram'
import { Col, Container, Row } from 'react-bootstrap'

function Home() {

    const [datasetId, setDatasetId] = useState(null)
    const [showHistogram, setShowHistogram] = useState(false)
    const [selectedColumn, setSelectedColumn] = useState("age")


    return (
        <>
            <Container fluid className=' p-4 bg-light min-vh-100' >
                <h1 className='text-center mb-4'>CSV Data Analyzer</h1>
                <Upload setDatasetId={setDatasetId} />
                <Row className='mt-3'>
                    <Col md={9}>
                        {datasetId && <DataTable datasetId={datasetId} />}
                        {showHistogram && selectedColumn && (<Histogram datasetId={datasetId} column={selectedColumn} />)}
                    </Col>
                    <Col md={3} >
                        <SidePanel datasetId={datasetId} selectedColumn={selectedColumn} setSelectedColumn={setSelectedColumn} setShowHistogram={setShowHistogram} />
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default Home
