import { configureStore } from '@reduxjs/toolkit';

import photoStore from './photoSlice';
import authStore from './authSlice.js';

export const store = configureStore({
  reducer: {
    photoStore,
    authStore,
  },
});
