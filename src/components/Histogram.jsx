import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import { getHistogramApi } from '../service/allApi'
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js'

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
)

function Histogram({ datasetId, column }) {

    const [chartData, setChartData] = useState(null)

    const fetchHistogram = async () => {

        if (!datasetId || !column) return

        const result = await getHistogramApi(datasetId, column)
        console.log(result);
        if (result.status === 200) {
            const labels = Object.keys(result.data)
            const values = Object.values(result.data)

            setChartData({
                labels,
                datasets: [{
                    label: `${column} Histogram`,
                    data: values,
                    backgroundColor: '#0d6efd'
                }]
            })
        }
    }

    useEffect(() => {
        fetchHistogram()
    }, [datasetId, column])


    return (
        <>
            <div className='mt-5'>
                <h2>Histogram</h2>
                {chartData ? (
                    <Bar data={chartData} />
                ) : (
                    <div className='bg-secondary bg-opacity-25 rounded p-3'>
                        Histogram will appear here
                    </div>
                )}
            </div>
        </>
    )
}

export default Histogram
