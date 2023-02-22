import { createSlice } from "@reduxjs/toolkit";

export const answerSlice = createSlice({
    name:"answer",
    initialState:{
        answerDetails:[],
    },
    reducers:{
        setAnswerData:(state,action)=>{
            state.answerDetails = action.payload;
        }
    }
})

export const {setAnswerData} = answerSlice.actions;

export default answerSlice.reducer;