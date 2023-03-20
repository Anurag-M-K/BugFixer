import {createSlice}  from '@reduxjs/toolkit';


/// for particular answers to show view question page 
export const particularAnswersSlice = createSlice({
    name:"particularAnswers",
    initialState:{
        particularAnswersDetails : [],
    },
    reducers:{
        setParticularAnswerDetails:(state,action)=>{
            state.particularAnswersDetails = action.payload
        }
    }
})

export const  { setParticularAnswerDetails } = particularAnswersSlice.actions

export default particularAnswersSlice.reducer;