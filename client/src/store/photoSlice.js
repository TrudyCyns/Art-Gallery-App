import { createSlice } from '@reduxjs/toolkit';

const photoSlice = createSlice({
  name: 'photoData',
  initialState: {
    photoData: JSON.parse(localStorage.getItem('photoData')) || '',
  },
  reducers: {
    updatePhotoData: (state, action) => {
      state.photoData = action.payload;
      localStorage.setItem('photoData', JSON.stringify(action.payload));

    },
    clearPhotoData: (state) => {
      state.photoData = {};
      localStorage.removeItem('photoData');
    },
  },
});

export const { updatePhotoData, clearPhotoData } = photoSlice.actions;

export default photoSlice.reducer;
