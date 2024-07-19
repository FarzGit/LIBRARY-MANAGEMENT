
import axios from 'axios';


const api = axios.create({
    baseURL: 'http://localhost:5000/api/users', 
});


api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

// // Example of a function to fetch user data
// const fetchUserData = async () => {
//     try {
//         const response = await api.get('/user/data');
//         return response.data;
//     } catch (error) {
//         console.error('Error fetching user data:', error);
//     }
// };

export default api;
