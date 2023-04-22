import React from "react";
import { toggleSidebar } from "../utils/sidebarSlice";
import { useDispatch } from "react-redux";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsSearch } from "react-icons/bs";
import user from "../assets/user.jpg";

const Header = () => {
  const dispatch = useDispatch();
  const toggleHandler = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div className="h-14 flex justify-between px-6 ">
      <div className="flex gap-5 pr-2">
        <div
          className="flex items-center cursor-pointer text-xl "
          onClick={() => toggleHandler()}
        >
          <RxHamburgerMenu />
        </div>
        <img
          className="h-14"
          src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
          alt="yt-logo"
        />
      </div>

      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search"
          className="h-10 w-[570px] rounded-l-full p-3 border shadow-sm outline-none"
        />
        <button className="h-10 rounded-r-full px-6 bg-gray-100 border  ">
          <BsSearch />
        </button>
      </div>

      <div className="flex items-center justify-center">
        <img className="h-8 w-8 rounded-full" src={user} alt="user-icon" />
      </div>
    </div>
  );
};

export default Header;
