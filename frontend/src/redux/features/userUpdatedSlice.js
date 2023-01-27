import { createSlice } from "@reduxjs/toolkit";


export const userUpdatedSlice = createSlice({
    name:"updatedUser", 
    initialState:{
        userUpdatedDetails:'',
    },
    reducers:{
        setUserUpdatedDetails : (state,action)=>{
            console.log("state checking ",state)
            console.log("action checking ",action.payload)
            state.userUpdatedDetails = action.payload;

        }
    }
})


export const updatedState = (state)=> state.user;

export const {setUserUpdatedDetails} = userUpdatedSlice.actions;

export default userUpdatedSlice.reducer;