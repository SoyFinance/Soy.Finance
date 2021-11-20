import axios from "axios"
import { useEffect, useState } from "react"

const METRICS = 'https://soy-finance.deta.dev/soy_metrics'

export const useMetrics = () => {
    const [metricsData, setMetricsData] = useState({
        "runtime": 0.031,
        "block_number": 8392129,
        "result": {
            "Users": 0,
            "Trades": 0,
            "Volume": 0,
            "Volume_24h": 0,
            "Soy_Circulating_Supply": 0,
            "Soy_IDO": 0,
            "Total_Value_Locked_In_Farms": 0
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