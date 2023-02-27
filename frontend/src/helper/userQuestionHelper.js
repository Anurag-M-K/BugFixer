import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import instance from "../config/axiosInstance";

export const addQuestion = async(tokenData,bodyJSON)=>{
    try {
        const addQuestion = await instance({
            url:"/api/question",
            method:"POST",
            data:bodyJSON,
            headers:{
                Authorization:tokenData
            }
        })
        return addQuestion.data
    } catch (error) {
        console.log(error)
    }

}


export const    questionVoting  = async(question_id,tokenData)=>{
    try {
        const incVoting = await instance({
            url:"/api/vote-increment",
            method:"POST",
            data:{question_id:question_id},
            headers:{
                Authorization:tokenData
            }
        })
        return questionVoting.data
    } catch (error) {
    return error.response
    }
}

export const questionDecVoting = async (question_id , tokenData)=>{
    try {
        const questionDecVoting = await instance({
            url:"/api/vote-decrease",
            data:{question_id:question_id},
            method:"POST",
            headers:{
                Authorization:tokenData
            }
        })
        return questionDecVoting.data
    } catch (error) {
        console.log(error)
        return error.response
    }
}
