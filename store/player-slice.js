import { createSlice } from "@reduxjs/toolkit";

const PlayerSlice = createSlice({
  name: "player",
  initialState: {
    playState: false,
    currentTrack: {},
  },
  reducers: {
    setPlayState(state, action) {
      state.playState = action.payload;
    },
    setCurrentTrack(state, action) {
      state.currentTrack = action.payload;
    },
  },
});

export default PlayerSlice;
