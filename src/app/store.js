import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from '../features/missions/missionsSlice';

/* eslint-disable-next-line import/prefer-default-export */
export const store = configureStore({
  reducer: {
    missions: missionsReducer,
  },
});
