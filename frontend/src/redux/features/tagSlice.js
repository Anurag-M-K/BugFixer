import { createSlice } from "@reduxjs/toolkit";


export const tagSlice  = createSlice({
    name:"tag",
    initialState:{
        allTags:[],
    },
    reducers:{
        setTags:(state,action)=>{
             state.allTags = action.payload

        }
    }
})

export const { setTags } = tagSlice.actions;

export default tagSlice.reducer;