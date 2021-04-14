import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'isLoggerdIn',
  initialState: {
    isAuth: false,
  },
  reducers: {
    login: (state) => {
      state.isAuth = true;
      console.log(state.isAuth);
    },
    logout: (state) => {
      state.isAuth = false;
      console.log(state.isAuth);
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
