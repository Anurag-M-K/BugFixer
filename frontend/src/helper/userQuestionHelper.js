import { useSelector } from "react-redux";
import instance from "../config/axiosInstance";

export const addQuestion = async(tokenData,bodyJSON)=>{
    console.log("from helper ",bodyJSON)
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
    console.log("quesiton id from helper ",question_id , tokenData)
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
        console.log(error)
    }
}

