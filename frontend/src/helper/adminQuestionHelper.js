import instance from "../config/axiosInstance";

export const getAllQuestionsDetails = async(adminToken)=>{
    try {
        const getAllQuestionsDetails = await instance({
            url:"/api/getQuestion",
            method:"GET",
            headers:{
                Authorization : adminToken
            }
        })
        return getAllQuestionsDetails.data
    } catch (error) {
        console.log(error)
    }
}

export const deleteQuestion = async(qid,adminToken)=>{
    console.log(qid)
    try {
        const deleteQuestion = await instance({
            url:"/admin/question-delete/"+qid,
            method:"DELETE",
            headers:{
                Authorization : adminToken
            }
        })
        return deleteQuestion.data
    } catch (error) {
        console.log(error)
        
    }
}

export const getQuestions = async(adminToken)=>{
    try {
        const getQuestions = await instance({
            url:"/admin/get-questions",
            method:"GET",
            headers:{
                Authorization:adminToken
            }
        })
        return getQuestions.data
    } catch (error) {
        console.log(error)
    }
}