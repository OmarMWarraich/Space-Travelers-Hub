import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchMissions from './api';

const initialState = [];

/* eslint-disable-next-line */
export const fetchMissionsAsync = createAsyncThunk(
  'missions/fetchMissions',
  async (missions) => {
    const response = await fetchMissions(missions);
    return response;
  },
);

export const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    rederMission: (state) => state,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissionsAsync.fulfilled, (state, action) => {
        /* eslint-disable-next-line */
        state = action.payload;
        return state;
      });
  },
});

export const { renderMission } = missionsSlice.actions;

export default missionsSlice.reducer;
