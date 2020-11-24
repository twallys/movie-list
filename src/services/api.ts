import axios from 'axios';

const api = axios.create({
    baseURL: 'http://www.omdbapi.com/?apikey=880c217e',
});

export default api;