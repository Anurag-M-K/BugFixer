import instance from "../config/axiosInstance";

export const addCommunityPosts = async (data) => {
  try {
    const addCommunityPosts = await instance({
      url: "/api/community/add-community-posts",
      method:"POST",
      data:data
    });
    return addCommunityPosts.data
  } catch (error) {
    console.log(error)
  }
};

export const  getAllCommunityPosts = async ()=>{
  try {
    const getAllCommunityPosts = await instance({
      url:"/api/community/get-community-posts",
      method:"GET",
    });
    return getAllCommunityPosts.data
  } catch (error) {
    console.log(error)
  }
}