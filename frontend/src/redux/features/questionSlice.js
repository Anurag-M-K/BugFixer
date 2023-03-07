import { createSlice } from "@reduxjs/toolkit";

export const questionSlice = createSlice({
    name:"question",
    initialState:{
        questionDetails:[],
    },
    reducers:{
        setQuestionDetails:(state,action)=>{
            state.questionDetails = action.payload;
        },
        filterQuestionDetails:(state,action)=>{
            
            state.questionDetails = action.payload;
        }
    }
})



export const {setQuestionDetails,filterQuestionDetails} = questionSlice.actions;
export default questionSlice.reducer;