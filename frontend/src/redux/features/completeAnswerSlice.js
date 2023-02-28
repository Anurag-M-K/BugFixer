import { createSlice } from "@reduxjs/toolkit";

export const completeAnswerSlice = createSlice({
    name:"answer",
    initialState:{
        answerDetails:[]
    },
    reducers:{
        setAnswerDetails:(state,action)=>{
            state.answerDetails = action.payload
        }
    }
})

export const { setAnswerDetails } = completeAnswerSlice.actions;

export default completeAnswerSlice.reducer;