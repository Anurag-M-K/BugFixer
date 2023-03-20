import axios from "axios";

const instance = axios.create({
    baseURL: import.meta.env.VITE_APP_BACKEND_URL
    // "http://localhost:8060" ,
    
});


export default instance;     



