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
  }
}

export const deleteCommunity = async(communityId , adminToken)=>{
  try {
    const deleteCommunity = await instance({
      url:"/api/community/community-delete",
      method:"DELETE",
      data:{communityId:communityId},
      headers:{
      Authorization:adminToken
      }
    })
    return deleteCommunity.data
  } catch (error) {
  }
}