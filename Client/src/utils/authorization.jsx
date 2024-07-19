
import axios from 'axios';

// Create an Axios instance
const api = axios.create({
    baseURL: '/api', // Base URL of your API
});

// Add a request interceptor to include the token in headers
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});



export default api;
