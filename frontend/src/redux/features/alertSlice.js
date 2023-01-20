import {createSlice}  from '@reduxjs/toolkit';

export const alertSlice = createSlice({
    name:"alerts",
    initialState:{
        loading:false
    },
    reducers:{
        showLoading:(state,dfvdf)=>{
            
            state.loading = true
        },
        hideLoading:(state)=>{
            state.loading = false
        }
    }
})


export  const alertState = (state)=>state.alerts;

export const {showLoading,hideLoading} = alertSlice.actions