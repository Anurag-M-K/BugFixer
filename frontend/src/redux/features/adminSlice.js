import { createSlice } from "@reduxjs/toolkit";


export const adminSlice = createSlice({
    name:"admin",
    initialState:{
        adminDetails:[]
    },
    reducers:{
        setAdminDetails : (state,response)=>{
            console.log('admin details first', state.response)
            state.adminDetails = response.payload
            console.log('second ',state.adminDetails)
        }
    }
})

export const adminState = (state)=> state.admin;

export const {setAdminDetails} = adminSlice.actions;