import { createSlice } from "@reduxjs/toolkit";

export const questionSlice = createSlice({
    name:"question",
    initialState:{
        questionDetails:[],
    },
    reducers:{
        setQuestionDetails:(state,action)=>{
            console.log("question in slice action payload ",action.payload)
            
            state.questionDetails = action.payload;
            console.log("question in slice action  ",state.questionDetails)
        },
        filterQuestionDetails:(state,action)=>{
            console.log("question in slice action payload ",action.payload)
            
            state.questionDetails = action.payload;
            console.log("question in slice action  ",state.questionDetails)
        }
    }
})



export const {setQuestionDetails,filterQuestionDetails} = questionSlice.actions;
export default questionSlice.reducer;