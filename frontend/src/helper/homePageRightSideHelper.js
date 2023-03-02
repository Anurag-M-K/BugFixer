import { toast } from "react-hot-toast";
import instance from "../config/axiosInstance";

export const getAllTags = async(tokenData)=>{
    try {
        const getAllTags = await instance({
            url:"/api/get-all-tags",
            method:"GET",
            headers:{
                Authorization:tokenData
            }
        })
        return getAllTags.data
    } catch (error) {
    }
}

export const getHotQuestions = async(tokenData)=>{
    try {
        const getHotQuestions = await instance({
            url:"/api/get-hot-questions",
            method:"GET",
            headers:{
                Authorization:tokenData
            }
        })
        return getHotQuestions.data
    } catch (error) {
        toast.error("server connection failed")
        return { message: 'Server Connection Failed' }    
      
    }
}