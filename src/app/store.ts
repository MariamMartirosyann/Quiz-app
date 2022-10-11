import { configureStore } from '@reduxjs/toolkit';
import nameReducer from '../features/name/nameSlice';

export const store = configureStore({
  reducer: {
   nameInfo:nameReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
