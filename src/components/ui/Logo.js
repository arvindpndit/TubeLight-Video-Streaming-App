import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch } from "react-redux";

import tubelight from "../../assets/Tubelight.png";
import tubelightSmall from "../../assets/tubelight-small.png";
import { toggleSidebar } from "../../utils/sidebarSlice";

const Logo = () => {
  const dispatch = useDispatch();
  const toggleHandler = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div className="flex gap-0 sm:gap-10">
      <div
        className="flex items-center cursor-pointer text-xl "
        onClick={() => toggleHandler()}
      >
        <RxHamburgerMenu />
      </div>
      <div className="z-[-1] w-14 sm:w-32 ">
        <img
          className="hidden sm:block w-32 h-full scale-150 object-contain "
          src={tubelight}
          alt="yt-logo"
        />
        <img
          className="block sm:hidden h-full scale-75 object-contains"
          src={tubelightSmall}
          alt="yt-logo"
        />
      </div>
    </div>
  );
};

export default Logo;
