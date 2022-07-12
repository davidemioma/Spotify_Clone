import React from "react";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { ImHeadphones } from "react-icons/im";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentTrack, setPlayState } from "../store/store";

const Track = ({ track }) => {
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
    <div className="flex items-center justify-between py-2 px-4 cursor-pointer hover:bg-white/10 rounded-lg group transition ease-out">
      <div className="flex items-center space-x-3">
        <img
          className="rounded-xl h-12 w-12 object-cover"
          src={track.albumUrl}
          alt=""
        />

        <div>
          <p className="text-white text-sm font-semibold truncate w-[450px]">
            {track.title}
          </p>

          <p className="text-[rgb(179,179,179)] text-[13px] font-semibold group-hover:text-white">
            {track.artist}
          </p>
        </div>
      </div>

      <div className="md:ml-auto flex items-center space-x-2.5">
        <div className="text-white flex space-x-1 text-sm font-semibold">
          <ImHeadphones className="text-lg" />

          <h4 className="font-sans">{track.popularity}</h4>
        </div>

        <div className="relative flex items-center w-[85px] h-10 border-2 border-[#262626] rounded-full cursor-pointer group-hover:border-white/40">
          <AiFillHeart className="text-xl text-[#868686] mx-3 icon" />

          {track.uri === currentTrack.uri && play ? (
            <div
              className="absolute -right-0.5 w-10 h-10 flex items-center justify-center border border-[#15883e] bg-[#15883e] rounded-full icon hover:scale-110"
              onClick={handlePlay}
            >
              <BsFillPauseFill className="text-white text-xl " />
            </div>
          ) : (
            <div
              className="absolute -right-0.5 w-10 h-10 flex items-center justify-center border border-white/60 bg-[#15883e] rounded-full hover:bg-[#15883e] hover:border-[#15883e] icon hover:scale-110"
              onClick={handlePlay}
            >
              <BsFillPlayFill className="text-white text-xl ml-[1px]" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Track;
