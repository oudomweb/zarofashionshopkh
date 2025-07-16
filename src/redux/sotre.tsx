// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../pages/profile/slice_action/formSlice';

export const store = configureStore({
  reducer: {
    form: formReducer,
  },
});
