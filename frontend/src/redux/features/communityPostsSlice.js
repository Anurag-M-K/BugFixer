import { createSlice } from "@reduxjs/toolkit";


export const communityPostsSlice = createSlice({
    name:"communityPosts",
    initialState:{
        posts:[]
    },
    reducers:{
        setCommunityPosts:(state,action)=>{
            state.posts = action.payload;
        }
    }
})



export const { setCommunityPosts } = communityPostsSlice.actions;

export default communityPostsSlice.reducer;