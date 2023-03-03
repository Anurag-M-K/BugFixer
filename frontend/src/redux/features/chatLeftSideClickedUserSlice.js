import { createSlice } from "@reduxjs/toolkit";


export const clickedUserSlice = createSlice({
    name:"clickedUser",
    initialState:{
        clickedUserDetails:[]
    },
    reducers:{
        setClickedUserDetails : (state,action)=>{
            state.clickedUserDetails = action.payload;
        }
    }
})

export const { setClickedUserDetails } = clickedUserSlice.actions