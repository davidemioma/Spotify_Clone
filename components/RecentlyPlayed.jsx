import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentTrack, setPlayState } from "../store/store";

const RecentlyPlayed = ({ track }) => {
  const dispatch = useDispatch();

  const play = useSelector((state) => state.player.playState);

  const currentTrack = useSelector((state) => state.player.currentTrack);

  const handlePlay = () => {
    dispatch(setCurrentTrack(track));

    if (track.uri === currentTrack.uri) {
      dispatch(setPlayState(!play));
    }
  };

  return (
    <div className="flex items-center space-x-3" onClick={handlePlay}>
      <img
        src={track.albumUrl}
        alt=""
        className="rounded-full w-[52px] h-[52px]"
      />

      <div>
        <p className="text-white text-[13px] mb-0.5 font-semibold hover:underline cursor-pointer truncate max-w-[150px]">
          {track.title}
        </p>

        <p className="text-xs text-[#686868] font-semibold cursor-pointer hover:underline">
          {track.artist}
        </p>
      </div>
    </div>
  );
};

export default RecentlyPlayed;
