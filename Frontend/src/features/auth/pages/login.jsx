import React, { useState } from 'react'
import "../style/form.scss"
import { Link } from 'react-router'

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
    }


    return (
        <main>
            <div className="form-container">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <input onChange={(e) => setUsername(e.target.value)} 
                    type="text" 
                    name="username" 
                    placeholder="Enter Username" />
                    <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="Enter Password" />
                    <button type="submit">Login</button>
                </form>
                <p>Don't have an account? <Link className='toggleAuthForm' to="/register">Register</Link></p>
            </div>
        </main>
    )
}

export default Login