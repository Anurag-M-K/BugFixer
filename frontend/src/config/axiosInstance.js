import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:8060" ,
    
});


export default instance;     



