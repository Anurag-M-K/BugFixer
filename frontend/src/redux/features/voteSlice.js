import { createSlice } from "@reduxjs/toolkit";


export const voteSlice = createSlice({
    name:"vote",
    initialState:{
        voteCount : "",
    },
    reducers:{
        setVote:(state,action)=>{
            state.voteCount = action.payload;
        }
    }
})



export const {setVote} = voteSlice.actions;

export default voteSlice.reducer;