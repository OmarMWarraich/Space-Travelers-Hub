import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchMissions from './api';

const initialState = [];

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
    renderMission: (state) => state,
    joinMission: (state, action) => {
      const newState = state;
      const index = newState.findIndex((mission) => mission.id === action.payload);
      newState[index].reserved = true;
    },
    leaveMission: (state, action) => {
      const newState = state;
      const index = newState.findIndex((mission) => mission.id === action.payload);
      newState[index].reserved = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissionsAsync.fulfilled, (state, action) => {
        let newState = state;
        newState = action.payload;
        return newState;
      });
  },
});

export const { renderMission, joinMission, leaveMission } = missionsSlice.actions;

export default missionsSlice.reducer;
