import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  usernameField: "",
  passwordField: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.user = action.payload;
    },
    logOut: (state) => {
      console.log(state);
      state.user = null;
    },
    setUsernameField: (state, action) => {
      state.usernameField = action.payload;
    },
    setPasswordField: (state, action) => {
      state.passwordField = action.payload;
    },
  },
});

export const { logIn, logOut, setUsernameField, setPasswordField } =
  userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectUsernameField = (state) => state.user.usernameField;
export const selectPasswordField = (state) => state.user.passwordField;

export default userSlice.reducer;
