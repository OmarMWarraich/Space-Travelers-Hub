import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchRockets from './api';

const initialState = [];

export const fetchRocketsAsync = createAsyncThunk(
  'rockets/fetchRockets',
  async (rockets) => {
    const response = await fetchRockets(rockets);
    return response;
  },
);

export const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    renderRockets: (state) => state,
    reserveRocket: (state, action) => {
      const newState = state;
      const index = newState.findIndex((rocket) => rocket.id === action.payload);
      newState[index].reserved = true;
    },
    cancelRocket: (state, action) => {
      const newState = [...state];
      const index = newState.findIndex((rocket) => rocket.id === action.payload);
      newState[index].reserved = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRocketsAsync.fulfilled, (state, action) => {
        let newState = state;
        newState = action.payload;
        return newState;
      });
  },
});

export const { renderRockets, cancelRocket, reserveRocket } = rocketsSlice.actions;

export default rocketsSlice.reducer;
