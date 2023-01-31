import { createSlice } from "@reduxjs/toolkit";




export const userSlice = createSlice({
  name: "user",
  initialState: {
    userDetails: [],
  },
  reducers: {
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;

      
      console.log("from userslice  state",state)
      console.log("from userslice action ",action.payload)

      console.log(state.userDetails, " state from signup")
    },
    setUserLogout: (state) => {
      state.user = null;
    },
  },
});

//profile




export const userState = (state) => state.user.user;

export const { setUserDetails, setUserLogout } = userSlice.actions;

export default userSlice.reducer;
