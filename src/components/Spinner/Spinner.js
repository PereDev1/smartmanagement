import React from 'react'
import spinner from './spinner.jpg'

import './spinner.css'

const Spinner = () => {
    return (
        <img className = "spinner" src= {spinner} alt="Please Wait as Chart Loads....." />
    )
}

export default Spinner
