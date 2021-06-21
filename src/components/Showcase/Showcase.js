import React from 'react'

import monitor from "./tab-water.jpg"
import detect from './leakage.jpg'
import './Showcase.css'

const Showcase = () => {
    return (
        <div className="container-fluid">
            <div className="showcase">
                <h3>Digital Water Management in a modern Society</h3>
            </div>
            <div className="service">
                <h2>Services</h2>
                <div className="card">
                    <div className="card-title">
                         <h3>Water Monitoring</h3>
                    </div>
                    <div className="card-body">
                        <div className="card-info">
                            <p>S.W.M system gives the user ability to remotely monitor the amount of water flowing through diffrent channels of their supply system and this 
                                .</p>
                        </div>
                        <div className="card-img">
                            <img src={monitor} alt="water monitoring" />
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-title">
                         <h3>Leakage Detection</h3>
                    </div>
                    <div className="card-body">
                        <div className="card-img">
                            <img src={detect} alt="Leakage Detection..." />
                        </div>
                        <div className="card-info">
                            <p>By real time monitoring of flow from different sections of supply system, occurence of leakages are be determined at specific sections of the system and the user is notified.</p>
                        </div>   
                    </div>
                </div>
            </div>
            <div className="about card">
                <h2>About SMART WATER MANAGEMENT</h2>
                <p>Smart water management is a platform that tailotred towards high level of er supply systems monitoring.Through Waziup,the sytem gives the user ability to actively monitor water flow in their systems and also be able to remotely turn ON and OFF of diffrent channels in their systems.
                     </p>
            </div>
        </div>
    )
}

export default Showcase
