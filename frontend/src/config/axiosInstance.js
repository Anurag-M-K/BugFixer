import axios from "axios";

const instance = axios.create({
    baseURL: "https://bugfixer-97dk.onrender.com",
    
});

// instance.defaults.headers.common['Authorization'] = 'Auth from instance';

export default instance;     



