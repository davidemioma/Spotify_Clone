import React from "react";
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentTrack, setPlayState } from "../store/store";

const Poster = ({ track }) => {
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
    <div
      className="relative w-[260px] h-[360px] text-white/80 cursor-pointer rounded-[50px] overflow-hidden hover:scale-105 hover:text-white/100 transition duration-200 ease-out group mx-auto"
      onClick={handlePlay}
    >
      <img
        className="absolute inset-0 w-full h-full object-cover rounded-[50px] opacity-80 group-hover:opacity-100"
        src={track.albumUrl}
        alt=""
      />

      <div className="absolute bottom-10 left-0 ml-4 flex items-center space-x-3.5">
        <div className="w-10 h-10 flex items-center justify-center bg-[#15883e] rounded-full group-hover:bg-[#1db954] flex-shrink-0">
          {track.uri === currentTrack.uri && play ? (
            <BsFillPauseFill className="text-white text-xl" />
          ) : (
            <BsFillPlayFill className="text-white text-xl ml-[1px]" />
          )}
        </div>

        <div className="text-[15px]">
          <p className="font-extrabold truncate w-44">{track.title}</p>

          <p>{track.artist}</p>
        </div>
      </div>
    </div>
  );
};

export default Poster;
