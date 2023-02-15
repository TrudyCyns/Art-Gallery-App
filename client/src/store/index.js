import { configureStore } from '@reduxjs/toolkit';

import photoStore from './photoSlice';

export const store = configureStore({
  reducer: {
    photoStore,
  },
});
