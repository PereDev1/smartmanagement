import { useEffect, useState, useContext } from 'react';
import { LineChart, ResponsiveContainer, Line, CartesianGrid, XAxis, YAxis, Tooltip, Label } from 'recharts';
import { DateTime } from 'luxon'

import { DataContext } from '../../Context/DataContext'
import { AuthContext } from '../../Context/AuthContext'
import Spinner from '../Spinner/Spinner';

function RealTimeChart() {
  const { updateData, fetchData } = useContext(DataContext)
  const { user } = useContext(AuthContext)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  //Formatting before parsing
  const add_Data = (rawData) => {
    rawData.map(item => {
        const {timestamp, value} = item
        const time = DateTime.fromISO(timestamp).toFormat("TT")
        const date = DateTime.fromISO(timestamp).toFormat("dd LLLL")
        if(value < 100){
          setData(currentData => [...currentData, {
            date: date,
            timestamp: time,
            value: value
          }])
        }
    })
    setLoading(false)
  }

  useEffect(() => {
    setData([])
    Promise.resolve(fetchData(user))
      .then(getData => {
        
        if(getData !== undefined){
          add_Data(getData)       
        }
      })
  }, [])

  useEffect(() => {
      const intervalid = setInterval(() => {
        const val = data.length
        Promise.resolve(updateData(val))
            .then(up_data => {
              const {data}  = up_data
              //check if updates are available
              if(data !== undefined) add_Data(data)
            })
    }, 10000)
    return () => clearInterval(intervalid)
  }, [data])

  return (
    <div>
      {!loading ? (
        <div>
          {(data !== undefined) ? (
            <ResponsiveContainer width='100%' height={400}>
              <LineChart data={data} margin = {{top:5, right:20, bottom: 5, left: 0}}>
                <Line type = 'monotone' dataKey = "value" strokeWidth = {3} stroke= '#8884d8'/>
                <CartesianGrid  stroke = "#ccc" strokeDasharray= "5 5"/>
                <XAxis dataKey = "timestamp">
                  <Label value= 'Time' content = {data.map(item => item.date)} offset = {0} position= 'insideBottom'/>
                </XAxis>
                <YAxis />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          ):(
            <h1>No data Available</h1>
          )} 
        </div>
        ):(
          <Spinner/>
        )}   
    </div>
  );
}

export default RealTimeChart;