import React, { useContext, useEffect, useState } from 'react'
import LoginForm from './LoginForm'
import Dashboard from '../Dashboard/Dashboard'
import './Login.css'
import { AuthContext } from '../../Context/AuthContext'

const Login = () => {
    const { fetchAuth, loginStatus } = useContext(AuthContext)
    const [error, setError] = useState()
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const[isAuthorized, setIsAuthorized] = useState(false)
    const [authToken, setAuthToken] = useState('')

    const loginData = details => {
        Promise.resolve(fetchAuth(details))
            .then(({status, token}) => {
                if(status === 200) {
                    setIsAuthenticated(true)
                    loginStatus(true)
                    if(token !== "") {
                        setIsAuthorized(!isAuthorized)
                        setAuthToken(token)
                    }
                } else if(status===401){
                    console.log("Error")
                    if(status!== undefined)setError(status)
                }
            })
    }

    useEffect(()=> {
        sessionStorage.setItem('TOKEN_AUTH', authToken)
    }, [authToken])

    return (
        <div>
            {isAuthenticated ? (
                <Dashboard></Dashboard>
            ): (
                <LoginForm loginData = {loginData} error={error}/>
            )}
        </div>
    )
}

export default Login
