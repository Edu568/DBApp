import React from 'react'
import { useHistory } from 'react-router-dom'

const Login = ({history}) => {

    const handleLogin = () => {
        history.push("/man")
    }


    return (
        <div classname="container mt-5 text-center">
            <img src="/assets/animate.gif" alt="gif animado"/>
            <h1 classname="my-3">Login Screen</h1>
            <button onClick={handleLogin} classname="btn btn-primary">Login</button>
            
        </div>
    )
}

export default Login
