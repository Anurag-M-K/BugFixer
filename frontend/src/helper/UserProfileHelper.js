import instance from "../config/axiosInstance";


export const deleteQuestion = async (qid, tokenData )=>{
    try {
        const deleteQuestion = await instance({
            url:`/api/question-delete/${qid}`,
            method:"DELETE",
            headers:{
                Authorization:tokenData
            }
        })
        return deleteQuestion.data
    } catch (error) {
        console.log("error ",error)
    }
}

export const getUserQuestions = async (  tokenData )=>{
    try {
        const getUserQuestions = await instance({
            url:"/api/get-user-questions",
            method:"GET",
            headers:{
                Authorization:tokenData
            }
        })
        return getUserQuestions;
        
    } catch (error) {
console.log(error)
    }

}

export const updateUserProfile = async(updateData , tokenData)=>{
    try {
        const updateUserProfile = await instance({
            url:"/api/update-user",
            method:"PUT",
            headers:{
                Authorization:tokenData,
            },
            data : updateData
        })
        return updateUserProfile
        
    } catch (error) {
        
    }
}

export const getUserDetails = async( tokenData )=>{
    console.log("token ",tokenData)
    try {
        const getUserDetails = await instance({
            url:"/api/getUserProfile",
            method:"GET",
            headers:{
                Authorization:tokenData
            }
        })
        return getUserDetails.data
    } catch (error) {
        console.log(error)
    }
}


