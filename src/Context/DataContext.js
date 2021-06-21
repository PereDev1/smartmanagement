import React, { createContext, useState } from 'react'
// import { DateTime } from 'luxon'
import axios from 'axios';

export const DataContext = createContext()

const DataContextProvider = (props) => {
    
    const [myDevice, setMyDevice] = useState()
    // const [rawData, setRawData] = useState([])
    // const [data, setData] = useState([])
    // const [cleanUp, setCleanUp] = useState([])
    // const [loading, setLoading] = useState(true)

    // //Formatting before parsing
    // const dataFormatting = () => {
    //     rawData.map(item => {
    //         const {timestamp, value} = item
    //         const time = DateTime.fromISO(timestamp).toFormat("TT")
    //         setData(currentData => [...currentData, {
    //             timestamp: time,
    //             value: value
    //         }])
    //     })
    //     console.log(data)
    //     dataCleaning()
    // }

    // //Remove Duplicates
    // const dataCleaning = () => {
    //     setCleanUp(currentData => [...currentData,[...new Set(data)]])
    // }

    // Request Data
    const configData = (gateway_id) => {
        return axios.get(`https://api.waziup.io/api/v2/sensors_data?device_id=${gateway_id}&limit=100`)
                .then(results => {
                    const {data} = results
                    if (data !== undefined) return data
                })
    }

    const fetchData = (user) => {
        return axios.get(`https://api.waziup.io/api/v2/devices?q=owner==${user}`)
            .then(res=> {
                const [{ gateway_id }] = res.data
                setMyDevice(gateway_id)
                const response = configData(gateway_id)
                if(response !== undefined) return response
            })
            
            .catch(err => {
                return err
            })
    }

    const updateData = (val) => {
        console.log(val)
        return axios.get(`https://api.waziup.io/api/v2/sensors_data?device_id=${myDevice}&limit=100&offset=${val}`)
            .then(res=> {
                if (res !== undefined) return res
            })
            
            .catch(err => {
                console.log(err)
            }) 
    }

    const getDevices = (user) => {
        return axios.get(`https://api.waziup.io/api/v2/devices?q=owner==${user}`)
            .then(res => {
                return res

            })
    }

    return (
        <DataContext.Provider value = {{
            fetchData,
            updateData,
            getDevices
        }}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataContextProvider
