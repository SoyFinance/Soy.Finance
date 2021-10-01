import axios from "axios"
import { useEffect, useState } from "react"

const METRICS = 'https://soy-finance.deta.dev/soy_metrics'

export const useMetrics = () => {
    const [metricsData, setMetricsData] = useState({
        "runtime": 0.031,
        "block_number": 8392129,
        "result": {
            "Users": 971,
            "Trades": 19477,
            "Volume": 94475694.40012097
        }
    })

    useEffect(() => {
        const fetchData = async () => {
            axios.get(METRICS).then(response => {
                if(response.data) {
                    setMetricsData(response.data);
                }
            })
            .catch((err) => {
                console.error(err)
            })
        }
        fetchData()
    }, [])

    return metricsData
}