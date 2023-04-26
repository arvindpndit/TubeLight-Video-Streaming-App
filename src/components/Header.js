import React from "react";
import { toggleSidebar } from "../utils/sidebarSlice";
import { useDispatch } from "react-redux";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsSearch } from "react-icons/bs";
import user from "../assets/user.jpg";
import tubelight from "../assets/Youtube.png";

const Header = () => {
  const dispatch = useDispatch();
  const toggleHandler = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div className="h-14 flex justify-between px-6  ">
      <div className="flex gap-10 pr-2">
        <div
          className="flex items-center cursor-pointer text-xl "
          onClick={() => toggleHandler()}
        >
          <RxHamburgerMenu />
        </div>
        <div className="z-[-1]">
          <img
            className="h-full scale-150 object-contain "
            src={tubelight}
            alt="yt-logo"
          />
        </div>
      </div>

      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search"
          className="h-10 w-[570px] rounded-l-full p-3 border shadow-sm outline-none"
        />
        <button className="h-10 rounded-r-full px-6 bg-gray-100 hover:bg-gray-200 border  ">
          <BsSearch />
        </button>
      </div>

      <div className="flex items-center justify-center  ">
        <div className="h-10 flex justify-center items-center px-2   ">
          <div className="font-bold text-lg text-gray-200 hover:text-gray-400">
            Made by Arvind
          </div>
        </div>
        <img className="h-10 w-10 rounded-full  " src={user} alt="user-icon" />
      </div>
    </div>
  );
};

export default Header;
