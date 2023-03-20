import { createSlice } from "@reduxjs/toolkit";


export const adminSlice = createSlice({
    name:"admin",
    initialState:{
        adminDetails:[]
    },
    reducers:{
        setAdminDetails : (state,response)=>{
            state.adminDetails = response.payload
        }
    }
})


export const {setAdminDetails} = adminSlice.actions;

export default adminSlice.reducer