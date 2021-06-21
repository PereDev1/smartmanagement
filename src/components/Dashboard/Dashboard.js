import React from 'react'
import {Route,Switch, Link , BrowserRouter as Router, useRouteMatch } from 'react-router-dom'
import './Dashboard.css'

import View from './View'
import Manage from './Manage'


export default function Dashboard() {
    let {url} =  useRouteMatch()
    return (
        <div className="dashboard">
            <Router>
                <section className ="sidebar">
                    <h3>Dashboard</h3>
                    <nav>
                        <ul>
                            <hr />
                            <li>
                                <Link to = {`${url}`}>View</Link>
                            </li>
                            <hr />
                            <li>
                                <Link to =  {`${url}/manage`}>Manage</Link>
                            </li>

                            <hr />
                        </ul>
                    </nav>
                </section>

                <div className="main-container">
                    <Switch>
                        <Route path = {`${url}`} exact component = {View}/>
                        <Route path = {`${url}/manage`} exact = {true} component = {Manage}/>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}
