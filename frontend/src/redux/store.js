import { configureStore } from "@reduxjs/toolkit";
import { adminSlice } from "./features/adminSlice";
import { alertSlice}  from "./features/alertSlice";
import { userSlice } from "./features/userSlice";
// import {persistReducer} from 'redux-persist';
// import storage from "redux-persist/lib/storage";
// import { combineReducers } from "@reduxjs/toolkit";


// const persistConfig = {
//     key :"root",
//     version :1,
//     storage
// };
// const reducer = combineReducers({
//     user:userSlice.reducer,
// })


// const persistedReducer = persistReducer(persistConfig,reducer)

export default configureStore({
    reducer:{
    
        // reducer:persistedReducer,
        alerts:alertSlice.reducer,
        user:userSlice.reducer,
       
        admin:adminSlice.reducer,
    },
    
})
    