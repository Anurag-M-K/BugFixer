import { createSlice } from "@reduxjs/toolkit";

export const completeUsersDetailsSlice = createSlice({
    name:"users",
    initialState:{
        completeUsers:[]
    },
    reducers:{
        setCompleteUsersDetails:(state,action)=>{
            state.completeUsers = action.payload;

        }
    }
})


export const {setCompleteUsersDetails} = completeUsersDetailsSlice.actions;