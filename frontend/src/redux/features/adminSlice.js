import { createSlice } from "@reduxjs/toolkit";


export const adminSlice = createSlice({
    name:"admin",
    initialState:{
        adminDetails:[]
    },
    reducers:{
        setAdminDetails : (state,response)=>{
            console.log("from admin slice ",response.payload)
            state.adminDetails = response.payload
        }
    }
})


export const {setAdminDetails} = adminSlice.actions;