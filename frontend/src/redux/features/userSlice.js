
import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name:'user',
    initialState:{
        userDetails:[]
    },
    reducers:{
        setUserDetails:(state,response)=>{
            console.log("first",state.response)
          
            state.userDetails =  response.payload
          
            console.log(state.userDetails , 'state')
        }
    }
})

export const userState = (state)=>state.user;

export const {setUserDetails} = userSlice.actions