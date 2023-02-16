import { createSlice  } from "@reduxjs/toolkit";

export const commentSlice = createSlice({
    name:"comment",
    initialState:{
        commentDetails:[]
    },
    reducers:{
        setCommentDetails:(state,action)=>{
            console.log("slice for that ",action.payload)
            state.commentDetails = action.payload;
        }
    }
})


export const { setCommentDetails } = commentSlice.actions