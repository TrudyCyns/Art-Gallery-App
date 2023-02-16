import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'userData',
  initialState: {
    userData: JSON.parse(localStorage.getItem('userData')) || {
      Email: '',
      isAuthenticated: false,
    },
  },
  reducers: {
    updateUserData: (state, action) => {
      state.userData = action.payload;
      localStorage.setItem('userData', JSON.stringify(action.payload));
    },
    clearUserData: (state) => {
      state.userData = { Email: '', isAuthenticated: false };
      localStorage.removeItem('userData');
    },
  },
});

export const { updateUserData, clearUserData } = authSlice.actions;

export default authSlice.reducer;
