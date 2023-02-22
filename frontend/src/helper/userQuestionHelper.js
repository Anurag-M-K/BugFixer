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