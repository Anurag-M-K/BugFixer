import { createSlice } from "@reduxjs/toolkit";


export const singleQuestionSlice = createSlice({
    name:"singleQuestion",
    initialState:{
        singleQuestiondata:[],
    },
    reducers:{
        setSingleQuestionDetails:(state,action)=>{
            state.singleQuestiondata = action.payload;
        }
    }
})

export const {setSingleQuestionDetails} = singleQuestionSlice.actions;

export default singleQuestionSlice.reducer;