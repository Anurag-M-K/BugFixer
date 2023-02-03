import { createSlice } from "@reduxjs/toolkit";

export const answerSlice = createSlice({
    name:"answer",
    initialState:{
        answerDetails:[],
    },
    reducers:{
        setAnswerData:(state,action)=>{
            console.log("answer slice")
            state.answerDetails = action.payload;
            console.log("this is from answer slice ",action.payload)
        }
    }
})

export const {setAnswerData} = answerSlice.actions;

export default answerSlice.reducer;