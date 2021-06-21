import React, { useState } from 'react'

const LoginForm = ({loginData, error}) => {
    const [details, setDetails] = useState({email: "", password: ""}
    )

    const submitHandler = e => {
        e.preventDefault();
        loginData(details)
    }

    return (
        <div className = "loginPage">
            <form onSubmit = {submitHandler} className = "form">
                <div className="form-inner">
                    <h2>Login</h2>
                    {(error === 401) ? (
                        <div className= "error">
                            <p>Username or password is incorrect</p>
                        </div>
                    ): ""}
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" onChange ={ e => setDetails({...details, email: e.target.value})} value= {details.email}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password" onChange ={ e => setDetails({...details, password: e.target.value})} value= {details.password}/>
                    </div>
                    <input type="submit" value="Login" />
                </div>
            </form>
        </div>
    )
}

export default LoginForm
