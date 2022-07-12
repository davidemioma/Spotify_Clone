import React, { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { LogoutIcon } from "@heroicons/react/outline";

const DropDown = () => {
  const { data: session } = useSession();

  const [openBtn, setOpenBtn] = useState(false);

  return (
    <div className="relative flex flex-col items-center">
      <div
        className="relative bg-[#1a1a1a] cursor-pointer w-[90px] h-10 flex items-center rounded-full hover:bg-[#3E3E3E]"
        onClick={() => setOpenBtn(!openBtn)}
      >
        <ChevronDownIcon className="h-6 mx-3 text-[#686868]" />

        <img
          className="w-10 h-10 rounded-full object-contain absolute right-0"
          src={
            session?.user?.image ||
            "https://thedesignhouse.ie/wordpress/wp-content/themes/makery/images/avatar.png"
          }
          alt=""
        />
      </div>

      {openBtn && (
        <button
          className="absolute text-white mt-10 top-3 right-0 bg-[#1a1a1a] flex items-center p-2 w-56 rounded-md shadow-lg tracking-wide hover:bg-[#3E3E3E]"
          onClick={() => signOut()}
        >
          <LogoutIcon className="w-5 h-5 mr-2" />

          <p className="text-sm">Log Out</p>
        </button>
      )}
    </div>
  );
};

export default DropDown;
