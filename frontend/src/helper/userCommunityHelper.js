import instance from "../config/axiosInstance";

export const joinCommunity = async(id,post,tokenData)=>{
    try {
        const joinCommunity = await instance({
            url:"/api/join-community",
            method:"PUT",
            data:{post:post.title,id:id},
            headers:{
                Authorization:tokenData,
            },
        })
        return joinCommunity.data
    } catch (error) {
    }

}
