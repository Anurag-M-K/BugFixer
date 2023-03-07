import { createSlice  } from "@reduxjs/toolkit";

export const commentSlice = createSlice({
    name:"comment",
    initialState:{
        commentDetails:[]
    },
    reducers:{
        setCommentDetails:(state,action)=>{
            state.commentDetails = action.payload;
        }
    }
})


export const { setCommentDetails } = commentSlice.actions