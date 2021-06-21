import React, { useContext } from 'react'
import {Link } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext'
// import Login from '../Login/Login'
// import App from '../App/App'
import './Header.css'

const Header = () => {
    const { login, loginStatus } = useContext(AuthContext);
    return (
        <div className= "main">
            <header>
                <div className="wrapper">
                    <div className="title">
                        <h1>Smart Water Management</h1>
                    </div>
                    <div className="nav-bar">
                            <nav>
                                <ul>
                                    <li id="home"><Link to= "/">Home</Link></li>
                                    {!login ? (
                                        <li id="login">
                                            <Link to= "/login">Login</Link>
                                        </li>
                                    ):(
                                        <React.Fragment>
                                            <li id="dashboard">
                                                <Link to= "/dashboard">Dashboard</Link>
                                            </li>
                                            <li id="logout">
                                                <Link to= "/" onClick= {() => 
                                                {
                                                    loginStatus(!login)
                                                    sessionStorage.removeItem('TOKEN_AUTH')
                                                }
                                                } >Logout</Link>
                                            </li>
                                        </React.Fragment>
                                    )}
                                </ul>
                            </nav>
                        </div>
                    </div>
             </header>
        </div>
    )
}

export default Header
