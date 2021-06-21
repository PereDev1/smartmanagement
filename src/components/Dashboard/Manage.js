import React, { useContext, useEffect, useState } from 'react'
import { Route, Link, Switch, BrowserRouter as Router, useRouteMatch } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext'
import { DataContext } from '../../Context/DataContext'
import Spinner from '../Spinner/Spinner'
import DisplayGrid from './DisplayGrid'

const Devices = ()=> {
    const [ deviceName, setDeviceName] = useState([])
    const [act_Name, setAct_Name] = useState([])
    const [dataLoad, setDataLoad] = useState(false)
    const {getDevices} = useContext(DataContext)
    const { user }= useContext(AuthContext)

    const devices = (res) => {
            res.map(items => {
                const { sensors } = items          
                if(sensors.length > 0) {
                    sensors.map(item => {
                        const  { name } = item
                        console.log(name)
                        if(name !== undefined) setDeviceName(s => [...s, name])
                    })
                } 
            })
    }

    const actuatorName = (act_name) => {
        act_name.map(items => {
            const {actuators} = items    
            if(actuators.length > 0) {
                actuators.map(item => {
                    const { name } = item
                    if(name !== undefined) setAct_Name(s => [...s, name])
                })           
            }
        })
    }

    useEffect(() => {
        Promise.resolve(getDevices(user))
            .then(res => {
                const { data } = res
                devices(data)
                actuatorName(data)
                setDataLoad(true)
                console.log(deviceName)
            })
    }, [])
    
    return (
        <div>
            {dataLoad ? (
                <DisplayGrid deviceName = {deviceName}/>
            ):(
                <Spinner />
            )}
        </div>
    )
}

const Actuators = ()=> {
    return (
        <h1>Actuators</h1>
    )
}

const manageDevices = ()=> {
    return (
        <h1>Manage Devices</h1>
    )
}

const Manage = () => {
    let { url } = useRouteMatch()

    return (
        <Router>
            <nav className="manage-nav">
                <ul>
                    <Link to={`${url}`}>Devices</Link>
                    <Link to={`${url}/manage_devices`} >Manage Devices</Link>
                </ul>
            </nav>
            <div className="disp">
                <Switch>
                    <Route path= {`${url}`} exact component= {Devices}/>
                    <Route path= {`${url}/actuators`} exact component= {Actuators}/>
                    <Route path= {`${url}/manage_devices`} exact component= {manageDevices}/>
                </Switch>
            </div>
        </Router>
    )
}

export default Manage
