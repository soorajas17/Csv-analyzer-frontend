import { commonApi } from "./commonApi"
import { serverURL } from "./server_URL"


// uploadCsvApi
export const uploadCsvApi = async (reqBody) => {
    return await commonApi("POST", `${serverURL}/upload`, reqBody)
}

// tableshow
export const getTableDataApi = async (id) => {
    return await commonApi("GET", `${serverURL}/dataset/${id}`)
}

// getColumn
export const getColumsApi = async (datasetId,column) => {
    return await commonApi("GET", `${serverURL}/dataset/${datasetId}/stats?column=${column}`)
}

// histogram
export const getHistogramApi = async (id,column) => {
    return await commonApi("GET", `${serverURL}/dataset/${id}/histogram?column=${column}`)
}




