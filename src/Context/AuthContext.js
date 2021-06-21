import React, { createContext, useState } from 'react'
import axios from 'axios';

export const AuthContext = createContext()

const AuthContextProvider = (props) => {
    // const [user, setUser] = useState({email: "", password: ""})
    const [user, setUser] = useState("")
    const [login, setLogin] = useState(false)
    const [result, setResult] = useState({
        token: "",
        status: {}
    })
    const data = [8.55, 3.97,2.726,2.29,1.56,1.56,1.46,1.39,1.30,1.02]
    const fetchAuth = ({email, password}) => {

    //API FETCH
        return axios.post('https://api.waziup.io/api/v2/auth/token', {
                "username": email,
                "password": password
            })
            .then(res => {
                setResult({status: res.status, token: res.data})
                setUser(email)
                return result
            })
            .catch(err => {
                setResult({status:err.response.status})
                return result
            })
        }
    const loginStatus = (status) => {
        return setLogin(status)
    }
    return (
        <AuthContext.Provider value = {{
            data,
            fetchAuth,
            loginStatus,
            login,
            user
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
