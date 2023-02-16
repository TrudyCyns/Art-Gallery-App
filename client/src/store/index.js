import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import photoStore from './photoSlice';
import authStore from './authSlice.js';

const middleware = [...getDefaultMiddleware()];

const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  localStorage.setItem('storeState', JSON.stringify(store.getState())); // Save the store state to Local Storage on every action
  return result;
};

export const store = configureStore({
  reducer: {
    photoStore,
    authStore,
  },
  middleware: [...middleware, localStorageMiddleware],
  preloadedState: JSON.parse(localStorage.getItem('storeState')) || {},
});
