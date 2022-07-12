import { configureStore } from "@reduxjs/toolkit";
import PlayerSlice from "./player-slice";

const store = configureStore({
  reducer: {
    player: PlayerSlice.reducer,
  },
});

export const { setPlayState, setCurrentTrack } = PlayerSlice.actions;

export default store;
