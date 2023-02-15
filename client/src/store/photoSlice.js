import { createSlice } from '@reduxjs/toolkit';

const photoSlice = createSlice({
  name: 'photoData',
  initialState: {
    photoData: {},
  },
  reducers: {
    updatePhotoData: (state, action) => {
      state.photoData = action.payload;
    },
    clearPhotoData: (state) => {
      state.photoData = {};
    },
  },
});

export const { updatePhotoData, clearPhotoData } = photoSlice.actions;

export default photoSlice.reducer;
