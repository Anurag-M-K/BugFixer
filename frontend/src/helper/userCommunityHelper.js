import instance from "../config/axiosInstance";

export const joinCommunity = async(id,post,tokenData)=>{
    console.log("4 data " , post )
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
        console.log(error)
    }

}
