import { configureStore } from "@reduxjs/toolkit";
import { adminSlice, setAdminDetails } from "./features/adminSlice";
import { alertSlice,showLoading}  from "./features/alertSlice";
import { setUserDetails, userSlice } from "./features/userSlice";
import {userUpdatedSlice} from "./features/userUpdatedSlice";
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';
import { combineReducers } from "@reduxjs/toolkit";


const persistConfig = {
    key:"root",
    version:1,
    storage
};

const reducer = combineReducers({
    user:userSlice.reducer,
    admin:adminSlice.reducer,
    alerts:alertSlice.reducer,
    updatedUser:userUpdatedSlice.reducer


})

const persistedReducer = persistReducer(persistConfig,reducer);

export default configureStore({
    reducer:persistedReducer
});
// export default configureStore({
//     reducer:{
    
//         alerts:alertSlice.reducer,
//         user:userSlice.reducer,
//         admin:adminSlice.reducer,
//         updatedUser:userUpdatedSlice.reducer,
//     },
    
// })
    