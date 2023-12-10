import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch } from "react-redux";

import tubelight from "../../assets/Tubelight.png";
import { toggleSidebar } from "../../utils/sidebarSlice";

const Logo = () => {
  const dispatch = useDispatch();
  const toggleHandler = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div className="flex gap-10 pr-2">
      <div
        className="flex items-center cursor-pointer text-xl "
        onClick={() => toggleHandler()}
      >
        <RxHamburgerMenu />
      </div>
      <div className="z-[-1] w-32">
        <img
          className="h-full scale-150 object-contain "
          src={tubelight}
          alt="yt-logo"
        />
      </div>
    </div>
  );
};

export default Logo;
