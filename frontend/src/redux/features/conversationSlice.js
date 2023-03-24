import { createSlice } from "@reduxjs/toolkit";

export const conversationSlice = createSlice({
    name:"conversation",
    initialState:{
        conversationDetails :[],
    },
    reducers:{
        setConversationDetails:(state,action)=>{
            console.log(action.payload, "from covnersatiob slice")
            state.conversationDetails = action.payload;
        }
    }
})

export const  { setConversationDetails } = conversationSlice.actions;

export default conversationSlice.reducer;