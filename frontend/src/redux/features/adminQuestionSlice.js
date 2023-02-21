import { createSlice } from "@reduxjs/toolkit";

export const adminQuestionSlice = createSlice({
    name:"adminQuestion",
    initialState:{
        adminQuestionDetails:[],
    },
    reducers:{
        setAdminQuestionDetails:(state,action)=>{
            state.adminQuestionDetails = action.payload
        }
    }
})

export const  { setAdminQuestionDetails } = adminQuestionSlice.actions;

export default adminQuestionSlice.reducer;