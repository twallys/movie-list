import axios from 'axios';

const api = axios.create({
    baseURL: 'https://www.omdbapi.com/?apikey=880c217e',
});

export default api;