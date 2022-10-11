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

export const { renderRockets } = rocketsSlice.actions;

// export const selectRockets = (state) => state.rockets;

export default rocketsSlice.reducer;
