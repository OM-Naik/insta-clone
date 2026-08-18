import React, { useState } from 'react'
import "../style/form.scss"
import { Link } from 'react-router'
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { user, loading, handleLogin } = useAuth();

    const navigate = useNavigate();

    if (loading) {
        return <div>Loading...</div>;
    }

    function handleSubmit(e) {
        e.preventDefault();
        handleLogin(username, password)
            .then(() => {
                console.log("Login successful!"); // Handle successful login, e.g., redirect to dashboard
                navigate("/");
            })
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
                    <button className='button primary-button' type="submit">Login</button>
                </form>
                <p>Don't have an account? <Link className='toggleAuthForm' to="/register">Create one.</Link></p>
            </div>
        </main>
    )
}

export default Login