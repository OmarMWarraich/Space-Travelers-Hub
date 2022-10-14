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
      const index = state.findIndex((rocket) => rocket.id === action.payload);
      /* eslint-disable-next-line no-param-reassign */
      state[index].reserved = true;
    },
    cancelRocket: (state, action) => {
      const index = state.findIndex((rocket) => rocket.id === action.payload);
      /* eslint-disable-next-line no-param-reassign */
      state[index].reserved = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRocketsAsync.fulfilled, (state, action) => {
        /* eslint-disable-next-line no-param-reassign */
        state = action.payload;
        return state;
      });
  },
});

export const { renderRockets, cancelRocket, reserveRocket } = rocketsSlice.actions;

export default rocketsSlice.reducer;
