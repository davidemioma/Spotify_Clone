import React, { useEffect, useState } from "react";
import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Body from "../components/Body";
import Widgets from "../components/Widgets";
import Player from "../components/Player";

const Home = () => {
  const [showPlayer, setShowPlayer] = useState(false);

  useEffect(() => setShowPlayer(true), []);

  return (
    <div>
      <Head>
        <title>Spotify-Clone</title>
      </Head>

      <main className="flex md:pb-24 min-h-screen min-w-max ">
        <Sidebar />

        <Body />

        <Widgets />

        {showPlayer && (
          <div className="fixed bottom-0 left-0 right-0 z-50">
            <Player />
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
