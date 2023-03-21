import instance from "../config/axiosInstance";

export const passwordReset = async (email)=>{
    try {
        const passwordReset = await instance({
            url:"/api/password-reset",
            method:"POST",
            data:{email : email}
        })
        return passwordReset.data
    } catch (error) {
        console.log(error)
    }
}

export const addingNewPassword = async (password,id)=>{
    try {
        const addingNewPassword = await instance({
            url:`/api/password-reset/${id}`,
            method:"POST",
            data:{password:password}
        })
        return addingNewPassword.data
    } catch (error) {
        console.log(error)
    }
}