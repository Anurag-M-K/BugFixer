import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:80",
    
});

// instance.defaults.headers.common['Authorization'] = 'Auth from instance';

export default instance;     



