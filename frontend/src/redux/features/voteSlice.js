import { createSlice } from "@reduxjs/toolkit";


export const voteSlice = createSlice({
    name:"vote",
    initialState:{
        voteCount : "",
    },
    reducers:{
        setVoteToStore:(state,action)=>{
            console.log("vote slice ",action.payload)
            state.voteCount = action.payload;
        }
    }
})



export const {setVoteToStore} = voteSlice.actions;

export default voteSlice.reducer;