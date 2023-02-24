import { createSlice } from "@reduxjs/toolkit";


export const usersImageSlice = createSlice({
    name:"image",
    initialState:{
    userProfilePic:"",
},
reducers:{
setUserImage:(state,action)=>{
    state.userProfilePic = action.payload;

    console.log("userimage slice ",action.payload)



},

}}
)


export const {setUserImage} = usersImageSlice.actions;

export default usersImageSlice.reducer;