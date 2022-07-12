import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPlayState } from "../store/store";
import { useSession } from "next-auth/react";
import SpotifyPlayer from "react-spotify-web-playback";
import {
  BsFillPlayFill,
  BsFillSkipEndFill,
  BsFillSkipStartFill,
} from "react-icons/bs";
import { FiVolume2 } from "react-icons/fi";
import { RiPlayList2Fill, RiComputerLine } from "react-icons/ri";
import { MdOutlineSpeaker } from "react-icons/md";
import { BiShuffle } from "react-icons/bi";
import { IoRepeatOutline } from "react-icons/io5";
import { CgArrowsExpandRight } from "react-icons/cg";

const Player = () => {
  const dispatch = useDispatch();

  const { data: session } = useSession();

  const play = useSelector((state) => state.player.playState);

  const currentTrack = useSelector((state) => state.player.currentTrack);

  const { uri } = currentTrack;

  useEffect(() => {
    if (uri) {
      dispatch(setPlayState(true));
    }
  }, [uri]);

  return (
    <>
      {/* Premium Spotify Users */}
      <SpotifyPlayer
        styles={{
          activeColor: "#fff",
          bgColor: "#181818",
          color: "#fff",
          loaderColor: "#fff",
          sliderColor: "#1cb954",
          trackArtistColor: "#ccc",
          trackNameColor: "#fff",
          height: "70px",
          sliderTrackColor: "#535353",
          sliderTrackBorderRadius: "4px",
          sliderHandleColor: "#fff",
          errorColor: "#fff",
        }}
        token={session?.user?.accessToken}
        showSaveIcon
        callback={(state) => setPlayState(state.isPlaying)}
        play={play}
        uris={uri ? [uri] : []}
        magnifySliderOnHover={true}
        autoPlay={true}
      />

      {/* Free Spotify Users but can't play songs */}
      {/* <div className="bg-[#181818] flex items-center justify-between space-x-20 md:space-x-0 px-5 py-2.5 rounded-t-2xl relative  overflow-x-scroll md:overflow-x-hidden scrollbar-hide">
        <div className="flex items-center space-x-3">
          <img
            src={currentTrack?.albumUrl}
            alt=""
            className="h-14 rounded-xl"
          />

          <div>
            <p className="text-white text-sm max-w-[150px] md:max-w-[250px] truncate">
              {currentTrack?.title}
            </p>

            <p className="text-xs text-[rgb(179,179,179)]">
              {currentTrack?.artist}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-2 w-full">
          <div className="flex items-center space-x-4 text-[#b3b3b3] text-xl">
            <BiShuffle className="text-lg playerIcon" />

            <BsFillSkipStartFill className="playerIcon" />

            <div className="bg-white text-black w-8 h-8 rounded-full flex items-center justify-center playerIcon hover:text-black">
              <BsFillPlayFill className="ml-[1px]" />
            </div>

            <BsFillSkipEndFill className="playerIcon" />

            <IoRepeatOutline className="playerIcon" />
          </div>

          <div className="flex items-center space-x-2.5 text-xs text-[#CECECE]">
            <p className="-mt-0.5">0:00</p>

            <div className="bg-[#383838] w-72 lg:w-[450px] h-1 rounded-xl" />

            <p className="-mt-0.5">0:00</p>
          </div>
        </div>

        <div className="text-[#b3b3b3] flex items-center space-x-3">
          <RiPlayList2Fill className="playerIcon" />

          <div className="flex items-center playerIcon">
            <RiComputerLine className="croppedIcon" />

            <MdOutlineSpeaker className="-ml-2.5" />
          </div>

          <div className="flex items-center space-x-3">
            <FiVolume2 className="text-[#b3b3b3] text-xl playerIcon" />

            <div className="bg-[#383838] w-[88px] h-1 rounded-xl">
              <div className="bg-[#b3b3b3] w-14 h-1 rounded-xl" />
            </div>
          </div>

          <CgArrowsExpandRight className="playerIcon" />
        </div>
      </div> */}
    </>
  );
};

export default Player;
