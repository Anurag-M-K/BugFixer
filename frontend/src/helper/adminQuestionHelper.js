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
    }
}

export const deleteQuestion = async(qid,adminToken)=>{
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
    }
}

export const getReportedQuestions = async(adminToken)=>{
    try {
        const getReportedQuestions = await instance({
            url:"/admin/get-report-questions",
            method:"GET",
            headers:{
                Authorization:adminToken
            }
        })
        return getReportedQuestions.data
    } catch (error) {
    }
}


export const deleteReportedQuestion = async(qid,adminToken)=>{
    try {
        const deleteReportedQuestion = await instance({
            url:"/admin/question-delete/"+qid,
            method:"DELETE",
            headers:{
                Authorization:adminToken
            }

        })
        return deleteReportedQuestion.data
    } catch (error) {
    }
}