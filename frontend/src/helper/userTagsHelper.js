import instance from "../config/axiosInstance";

export const getAllTags = async(tokenData)=>{
    try {
        const getAllTags = await instance({
            url:"/api/get-all-tags",
            method:"GET",
            headers:{
                Authorization:tokenData
            }
        })
        return getAllTags.data
    } catch (error) {
        console.log(error)
    }
}