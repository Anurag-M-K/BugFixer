import { createSlice } from "@reduxjs/toolkit";


export const clickedUserSlice = createSlice({
    name:"clickedUser",
    initialState:{
        clidkedUserDetails:[]
    },
    reducers:{
        setClickedUserDetails : (state,action)=>{
            state.clidkedUserDetails = action.payload;
        }
    }
})

export const { setClickedUserDetails } = clickedUserSlice.actions