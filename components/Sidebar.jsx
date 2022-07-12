import React from "react";
import Image from "next/image";
import {
  ChartBarIcon,
  ClockIcon,
  DotsHorizontalIcon,
  HomeIcon,
} from "@heroicons/react/solid";
import { FaMicrophoneAlt } from "react-icons/fa";
import { RiCompassFill } from "react-icons/ri";

const Sidebar = () => {
  return (
    <section className="fixed bg-black top-0 z-40 h-screen w-[90px] p-4 flex flex-col items-center space-y-8 ">
      <Image
        src="https://rb.gy/xkacau"
        width={56}
        height={56}
        objectFit="contain"
      />

      <div className="flex flex-col space-y-8">
        <HomeIcon className="sidebarIcon text-white opacity-[0.85]" />

        <RiCompassFill className="sidebarIcon text-2xl" />

        <FaMicrophoneAlt className="sidebarIcon ml-1" />

        <ChartBarIcon className="sidebarIcon" />

        <ClockIcon className="sidebarIcon" />

        <DotsHorizontalIcon className="sidebarIcon" />
      </div>
    </section>
  );
};

export default Sidebar;
