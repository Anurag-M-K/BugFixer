import instance from "../config/axiosInstance";


export const deleteQuestion = async ( id ,tokenData )=>{
    try {
        const deleteQuestion = await instance({
            url:`/api/question-delete/${id}`,
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

export const getUserQuestions = async ( userId , tokenData )=>{
    try {
        const getUserQuestions = await instance({
            url:`/api/get-user-questions/${userId}`,
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

export const getUserDetails = async( id , tokenData )=>{
    try {
        const getUserDetails = await instance({
            url:"/api/getUserProfile/"+id,
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


