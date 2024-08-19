import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/login/loginSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    // Other reducers if you have them
  },
});

// Rest of your application setup
