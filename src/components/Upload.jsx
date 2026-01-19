import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { uploadCsvApi } from '../service/allApi';

function Upload({ setDatasetId }) {

    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    }


    const handleUpload = async () => {
        if (!file) {
            alert("Please select a CSV file")
            return;
        }
        const reqBody = new FormData()
        reqBody.append("file", file)

        const result = await uploadCsvApi(reqBody)
        console.log(result);

        if (result?.status == 200) {
            console.log(result.data.dataset_id)
            setDatasetId(result.data.dataset_id)
            alert("CSV uploaded successfully")
        } else {
            alert("upload failed")
        }

    }

    return (

        <>
            <div className='d-flex gap-2 mb-3 '>
                <Form.Control type='file' onChange={handleFileChange} className='w-50' />
                <Button onClick={handleUpload} variant='primary'>
                    UploadCsv
                </Button>
            </div>
        </>
    )
}

export default Upload
