    import { createSlice  } from "@reduxjs/toolkit";

    export const userProfileQuestionsSlice = createSlice({
        name:"userProfileQuestions",
        initialState:{
            userProfileQuestionsDetails:[],
            
        },
        reducers:{
            setUserProfileQuestionsDetails:(state,action)=>{
                console.log("from usrepROIFILEquestion slice ",action.payload)
                state.userProfileQuestionsDetails = action.payload;
            }
        }
    })


    export const { setUserProfileQuestionsDetails } = userProfileQuestionsSlice.actions

    export default userProfileQuestionsSlice.reducer;