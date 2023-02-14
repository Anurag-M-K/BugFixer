import axios from '../config/axiosInstance'


export const userChats = (id)=> axios.get(`/chat/${id}`)