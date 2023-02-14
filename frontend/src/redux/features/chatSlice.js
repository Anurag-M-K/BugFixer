import { createSlice } from "@reduxjs/toolkit";

export const chatSlice = createSlice ({
    name:"chat",
    initialState:{
        chatDetails:[]
    },
    reducers:{
        setChatDetails:(state,action)=>{
            console.log("slice for chat ",action.payload)
            state.chatDetails = action.payload;
        }
    }
})

export const {setChatDetails} = chatSlice.actions