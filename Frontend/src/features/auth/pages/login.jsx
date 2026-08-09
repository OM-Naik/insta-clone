import React from 'react'
import "../style/form.scss"
import { Link } from 'react-router'

const Login = () => {
    return (
        <main>
            <div className="form-container">
                <h1>Login</h1>
                <form>
                    <input type="text" name="username" placeholder="Enter Username" />
                    <input type="password" name="password" placeholder="Enter Password" />
                    <button type="submit">Login</button>
                </form>
                <p>Don't have an account? <Link className='toggleAuthForm' to="/register">Register</Link></p>
            </div>
        </main>
    )
}

export default Login