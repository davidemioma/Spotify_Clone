import React, { useEffect, useState } from "react";
import Search from "./Search";
import { useSession } from "next-auth/react";
import useSpotify from "../lib/useSpotify";
import Poster from "./Poster";
import Genres from "./Genres";
import Track from "./Track";

const Body = () => {
  const spotifyApi = useSpotify();

  const { data: session } = useSession();

  const [searchInput, setSearchInput] = useState("");

  const [searchResults, setSearchResults] = useState([]);

  const [newReleases, setNewReleases] = useState([]);

  //Searched Songs
  useEffect(() => {
    if (!searchInput.trim()) return;

    if (spotifyApi?.getAccessToken()) {
      spotifyApi?.searchTracks(searchInput).then((res) => {
        setSearchResults(
          res?.body?.tracks?.items?.map((track) => {
            return {
              id: track.id,
              artist: track.artists[0].name,
              title: track.name,
              uri: track.uri,
              albumUrl: track.album.images[0].url,
              popularity: track.popularity,
            };
          })
        );
      });
    }
  }, [session, spotifyApi, searchInput]);

  //Default New Releases
  useEffect(() => {
    if (spotifyApi?.getAccessToken()) {
      spotifyApi?.getNewReleases().then((res) => {
        setNewReleases(
          res?.body?.albums?.items?.map((track) => {
            return {
              id: track.id,
              artist: track.artists[0].name,
              title: track.name,
              uri: track.uri,
              albumUrl: track.images[0].url,
            };
          })
        );
      });
    }
  }, [session, spotifyApi]);

  return (
    <section className="ml-24 flex-grow py-4 space-y-8 md:max-w-6xl md:mr-2.5">
      <Search input={searchInput} setInput={setSearchInput} />

      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 gap-x-4 p-4 h-96 overflow-x-hidden overflow-y-scroll scrollbar-hide">
        {searchResults.length === 0
          ? newReleases
              .slice(0, 4)
              .map((track) => <Poster key={track.id} track={track} />)
          : searchResults
              .slice(0, 4)
              .map((track) => <Poster key={track.id} track={track} />)}
      </div>

      <div className="flex gap-x-8 min-w-full ml-6 absolute md:relative">
        <Genres />

        <div className="w-full pr-11">
          <h2 className="text-white font-body mb-3">
            {searchResults.length === 0 ? "New Releases" : "Tracks"}
          </h2>

          <div className="space-y-3 border-2 border-[#262626] rounded-2xl p-3 bg-[#0D0D0D] overflow-y-scroll w-[830px] h-[1000px] md:h-96 scrollbar-thin scrollbar-thumb-gray-600  scrollbar-thumb-rounded hover:scrollbar-thumb-gray-500">
            {searchResults.length === 0
              ? newReleases
                  .slice(4, newReleases.length)
                  .map((track) => <Track key={track.id} track={track} />)
              : searchResults
                  .slice(4, searchResults.length)
                  .map((track) => <Track key={track.id} track={track} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body;
