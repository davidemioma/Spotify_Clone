import React, { useEffect, useState } from "react";
import { HiOutlineShieldCheck } from "react-icons/hi";
import { MdOutlineSettings } from "react-icons/md";
import { BiBell } from "react-icons/bi";
import { ViewGridIcon } from "@heroicons/react/solid";
import { useSession } from "next-auth/react";
import useSpotify from "../lib/useSpotify";
import DropDown from "./DropDown";
import RecentlyPlayed from "./RecentlyPlayed";

const Widgets = () => {
  const spotifyApi = useSpotify();

  const { data: session } = useSession();

  const [recentlyPlayed, setRecentlyPlayed] = useState([]);

  useEffect(() => {
    if (spotifyApi?.getAccessToken()) {
      spotifyApi.getMyRecentlyPlayedTracks({ limit: 20 }).then((res) => {
        setRecentlyPlayed(
          res.body.items.map(({ track }) => {
            return {
              id: track.id,
              artist: track.artists[0].name,
              title: track.name,
              uri: track.uri,
              albumUrl: track.album.images[0].url,
            };
          })
        );
      });
    }
  }, [session, spotifyApi]);

  return (
    <section className=" p-4 space-y-8 pr-8">
      <div className="flex items-center justify-between space-x-2">
        <div className="flex items-center space-x-4 h-12 py-3 px-4 border-2 border-[#262626] rounded-full">
          <HiOutlineShieldCheck className="text-[#CCCCCC] text-xl cursor-pointer" />

          <MdOutlineSettings className="text-[#CCCCCC] text-xl cursor-pointer" />

          <BiBell className="text-[#CCCCCC] text-xl cursor-pointer" />
        </div>

        <DropDown />
      </div>

      {recentlyPlayed > 0 && (
        <div className="bg-[#0D0D0D] border-2 border-[#262626] p-4 rounded-xl space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-white text-sm font-bold">Recently Played</p>

            <ViewGridIcon className="h-6 text-[#686868]" />
          </div>

          <div className="space-y-4 overflow-y-scroll overflow-x-hidden h-[250px] md:h-[400px] scrollbar-hide">
            {recentlyPlayed?.map((track, i) => (
              <RecentlyPlayed key={i} track={track} />
            ))}
          </div>

          <button className="btn">View All</button>
        </div>
      )}
    </section>
  );
};

export default Widgets;
