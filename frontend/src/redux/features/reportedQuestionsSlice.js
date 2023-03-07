import { createSlice } from "@reduxjs/toolkit";


export const reportedQuestionsSlice = createSlice({
    name:"reportedQuestion",
    initialState:{
        reportedQuestionDetails:[],
    },
    reducers:{
        setReportedQuestions:(state,action)=>{
            state.reportedQuestionDetails = action.payload;
        }
    }
})


export const { setReportedQuestions } = reportedQuestionsSlice.actions;

export default reportedQuestionsSlice.reducer;