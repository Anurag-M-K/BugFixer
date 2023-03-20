import { toast } from "react-hot-toast";
import instance from "../config/axiosInstance";

export const addTag = async(values,adminToken)=>{
    try {
        const addTag = await instance({
            url:"/admin/add-tag",
            method:"POST",
            data:values,
            headers:{
                Authorization:adminToken
            }
        })
        return addTag.data
    } catch (error) {
        console.log(error)
        toast.error("Something went wrong. Please try again.");

    }
}

export const getTags = async(adminToken)=>{
    try {
        const getTags = await instance({
            url:"/admin/get-tags",
            method:"GET",
            headers:{
                Authorization:adminToken
            }
        })
        return getTags.data
    } catch (error) {
        
        console.log(error)
        toast.error("Something went wrong. Please try again.");

    }
}


export const deleteTag = async(tag , adminToken)=>{
    try {
      const deleteTag = await instance({
        url:"/admin/tag-delete",
        method:"DELETE",
        data:{tag:tag},
        headers:{
        Authorization:adminToken
        }
      })
      return deleteTag.data
    } catch (error) {
        
        console.log(error)
        toast.error("Something went wrong. Please try again.");
    }
  }