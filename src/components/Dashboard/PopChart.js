import React, {Component, useContext, useEffect, useState} from 'react';
import Chart from 'react-apexcharts';
import { AuthContext } from '../../Context.js/AuthContext';

const PopChart = (props) => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [points, setPoints] = useState([])
    const { data } = useContext(AuthContext)

    useEffect(() => {
        if(data.length !== 0) {
            setIsLoaded(true)
            console.log(points)
        }
        return (
            setPoints(data)
        )
    }, [])
    const [property, setProperty] = useState(
        {
            options: {
                chart:{
                    background: '#f4f4f4',
                    foreColor: '#333'
                },
                xaxis: {
                    categories: []
                },
                plotOptions: {
                    bar:{
                        horizontal: false
                    }
                },
                fill:{
                    colors: ['#f44336']
                },
                dataLabels: {
                    enabled: false
                },
                title:{
                    text: 'Flow Data',
                    align: 'center',
                    margin: 20,
                    offsetY: 20,
                    style:{
                        fontSize: '25'
                    }
                }
            },
            series: [{
                name: 'Flowrate',
                data: [8.55, 3.97,2.726,2.29,1.56,1.56,1.46,1.39,1.30,1.02]
            }]
        }
    )
    // const fetchData = () =>{
    //     const { data } = props
    //     setPoints(...points, data)
    // }
    // fetchData()
    // console.log(points)

    return (
        <div>
            {isLoaded ? (
                <Chart
                    options = {property.options}
                    series = {property.series}
                    type  = "line"
                    height = "450"
                    width = "100%"
                />
                ) : (console.log("No data to display"))}
        </div>
        )
        
}

export default PopChart
