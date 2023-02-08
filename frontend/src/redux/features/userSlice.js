import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
  name: "user",
  initialState: {
    userDetails: [],
    tokenData:"",
  },
  reducers: {
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
    setUserLogout: (state) => {
      state.user = null;
    },
    setToken : (state,action)=>{
      state.tokenData = action.payload;
    }
  },
});

export const userState = (state) => state.user.user;

export const { setUserDetails, setUserLogout,setToken } = userSlice.actions;

export default userSlice.reducer;
