import { createSlice } from "@reduxjs/toolkit";


export const usersImageSlice = createSlice({
    name:"image",
    initialState:{
    userProfilePic:"https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp",
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