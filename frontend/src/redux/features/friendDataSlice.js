import {createSlice}  from '@reduxjs/toolkit';


export const friendDataSlice = createSlice({
    name:"frind",
    initialState:{
        friendData : [],
    },
    reducers:{
        setFriendData:(state,action)=>{
            state.friendData = action.payload
        }
    }
})


export const { setFriendData } = friendDataSlice.actions

export default friendDataSlice.reducer;