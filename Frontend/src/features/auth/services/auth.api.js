const axios = require('axios');
const api = axios.create({
    baseURL: 'http://localhost:3000/api/auth',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});



async function register(username, email, password) {
    try {
        const response = await api.post('/register', {
            username,
            email,
            password,
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Registration failed');
    }
}


async function login(email, password) {
    try {
        const response = await api.post('/login', {
            email,
            password,
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Login failed');
    }
}


async function getMe() {
    try {
        const response = await api.get('/get-me');
        return response.data;
    }
    catch (error) {
        throw new Error(error.response.data.message || 'Fetching user details failed');
    }
}


export { register, login, getMe };