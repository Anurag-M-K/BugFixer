import { createSlice  } from "@reduxjs/toolkit";

export const adminTokenSlice = createSlice({
    name:"adminToken",
    initialState:{
        adminToken:"",
    },
    reducers:{
        setAdminToken: (state,action)=>{
            state.adminToken = action.payload;
        }
    }
})

export const { setAdminToken } = adminTokenSlice.actions;

export default adminTokenSlice.reducer