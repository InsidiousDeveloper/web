import React, {useContext, useState} from 'react'
import {Context} from "../context/admincontext";
import logo from '../images/logo.jpg'

export const AuthPage = () => {

    const {setLoggedIn} = useContext(Context)

    const password = '123456'
    const user = 'admin'

    const [credentials, setCredentials] = useState({
        user: '',
        password: ''
    })

    const formHandler = (event) => {
        setCredentials({
            ...credentials, [event.target.name]: event.target.value
        })
    }

    const validation = () => {
        if (credentials.user === user && credentials.password === password) {
            setLoggedIn(true)
        }
    }

    return (
        <div className="container admin">
            <div className="left-color colors"></div>
            <div className="right-color colors"></div>
            <div className="content">
                <div className="form-wrapper">
                    <div className="left-side">
                        <img src={logo} alt=""/>
                        <h3>Western america express</h3>
                    </div>
                    <div className="right-side">
                        <h2>User verification</h2>
                        <input type="text" name="user" placeholder="Username" value={credentials.user} onChange={(e) => formHandler(e)}/>
                        <input type="password" name="password" placeholder="Password" value={credentials.password} onChange={(e) => formHandler(e)}/>
                        <button onClick={validation}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}