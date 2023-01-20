
import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name:'user',
    initialState:{
        userDetails:[]
    },
    reducers:{
        setUserDetails:(state,action)=>{
           
            state.userDetails =  action.payload
          
        },
        setUserLogout:(state)=>{
            state.user = null;
        }

    }
})

export const userState = (state)=>state.user;

export const {setUserDetails,setUserLogout} = userSlice.actions