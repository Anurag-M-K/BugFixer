import instance from "../config/axiosInstance";


export const getConversation = async(id,tokenData)=>{
    try {
        const getConversation = await instance({
            url:'/api/conversation/'+id,
            method:"GET",
            headers:{
                Authorization:tokenData
            }
        })
        return getConversation.data
    } catch (error) {
        console.log(error)
    }
}

export const getUser = async(friendId,tokenData)=>{
    try {
        const getUser = await instance({
            url:"/api/getuser/"+friendId,
            method:"GET",
            headers:{
                Authorization:tokenData
            }
        })
        return getUser.data
    } catch (error) {
        console.log(error)
    }
}

export const getMessages = async(id,tokenData)=>{
    try {
        const getMessages = await instance({
            url:"/api/message/"+id,
            method:"GET",
            headers:{
                Authorization:tokenData
            }
        })
        return getMessages.data
    } catch (error) {
        console.log("error from geting messages ",error)
    }
}

export const postMessages = async(message,tokenData)=>{
    try {
        const postMessages = await instance({
            url:'/api/message',
            method:"POST",
            headers:{
                Authorization:tokenData
            },
            data:{ message }
        })
        return postMessages.data

    } catch (error) {
        console.log(error)
    }
}