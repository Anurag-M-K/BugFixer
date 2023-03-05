import { toast } from "react-hot-toast";
import instance from "../config/axiosInstance";


export const answerVoting =async (aId,tokenData) => {
    try {
        const answerVoting = await instance({
            url:"/api/vote-answer",
            method:"post",
            data:{aId:aId},
            headers: {
            Authorization:tokenData
            }
        })
        return answerVoting.data
    } catch (error) {
        toast.error(error.response.data.error    )
        console.error(error);
    }
}
export const answerDownVoting =async (aId,tokenData) => {
    try {
        const answerDownVoting = await instance({
            url:"/api/downvote-answer",
            method:"post",
            data:{aId:aId},
            headers: {
            Authorization:tokenData
            }
        })
        return answerDownVoting.data
    } catch (error) {
        toast.error(error.response.data.error)
        console.error(error);
    }
}


export const deleteAnswer = async(tokenData, aId)=>{
    try {
        const deleteAnswer = await instance({
            url:"/api/delete-answer",
            method:"DELETE",
            data:{aId:aId},
            headers:{
                Authorization:tokenData
            }
        })
        return deleteAnswer.data
    } catch (error) {
        console.log("error fro",error)
        toast.error(error.response.data.message)
    
    }
}

export const acceptAnswer = async( aId,tokenData)=>{
    try {
        const acceptAnswer = await instance({
            url:"/api/accept-answer",
            method:"POST",
            data:{aId:aId},
            headers:{
                Authorization:tokenData
            }
        })
        return acceptAnswer.data
    } catch (error) {
        console.log(error)
    }
}