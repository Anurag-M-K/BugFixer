import { configureStore } from "@reduxjs/toolkit";
import { adminSlice } from "./features/adminSlice";
import { alertSlice}  from "./features/alertSlice";
import { userSlice } from "./features/userSlice";

export default configureStore({
    reducer:{
        alerts:alertSlice.reducer,
        user:userSlice.reducer,
        admin:adminSlice.reducer,
    },
    
})
    