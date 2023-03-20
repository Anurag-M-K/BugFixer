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
        return error.response
    }
}


export const getAnswers = async (tokenData , id) => {
    try {
        const getAnswers = await instance({
            url:"/api/get-question-answers/"+id,
            method:"GET",
            headers:{
                Authorization:tokenData
            }
        })
        return getAnswers.data
    } catch (error) {
        console.error(error)
    }
}

export const getQuestion = async()=>{
    try {
        const getQuestion = await instance({
            url:"/api/getQuestion",
            method:"GET",
            headers:{
                Authorization:tokenData
            }
        })
        return getQuestion.data
    } catch (error) {
        console.log(error)
    }
}