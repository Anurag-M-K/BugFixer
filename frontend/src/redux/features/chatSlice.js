import { createSlice } from "@reduxjs/toolkit";

export const chatSlice = createSlice ({
    name:"chat",
    initialState:{
        chatDetails:[],
        conversation:[],
    },
    reducers:{
        setChatDetails:(state,action)=>{
            state.chatDetails = action.payload;
        },
        setConversations:(state,action)=>{
            state.conversation = action.payload;
        }
    }
})

export const {setChatDetails ,setConversation} = chatSlice.actions