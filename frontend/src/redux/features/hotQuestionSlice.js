import { createSlice  } from "@reduxjs/toolkit";

export const hotQuestionSlice = createSlice({
    name:"hotQuestion",
    initialState:{
        hotQuestionDetails : [],

    },
    reducers:{
        setHotQuestionDetails :(state,action)=>{
            state.hotQuestionDetails = action.payload
        }
    }
})

export const  { setHotQuestionDetails } = hotQuestionSlice.actions;

export default hotQuestionSlice.reducer;