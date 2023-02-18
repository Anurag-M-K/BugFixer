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

