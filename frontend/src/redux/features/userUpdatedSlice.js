import { createSlice } from "@reduxjs/toolkit";


export const userUpdatedSlice = createSlice({
    name:"updatedUser", 
    initialState:{
        userUpdatedDetails:'',
    },
    reducers:{
        setUserUpdatedDetails : (state,action)=>{
          
            state.userUpdatedDetails = action.payload;

        }
    }
})


export const updatedState = (state)=> state.user;

export const {setUserUpdatedDetails} = userUpdatedSlice.actions;

export default userUpdatedSlice.reducer;