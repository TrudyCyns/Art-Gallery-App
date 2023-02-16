import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'userData',
  initialState: {
    userData: {},
  },
  reducers: {
    updateUserData: (state, action) => {
      state.userData = action.payload;
    },
    clearUserData: (state) => {
      state.userData = {};
    },
  },
});

export const { updateUserData, clearUserData } = authSlice.actions;

export default authSlice.reducer;
