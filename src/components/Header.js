import React from "react";
import { toggleSidebar } from "../utils/sidebarSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const toggleHandler = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div className="h-14 flex justify-between bg-slate-100">
      <div className="flex gap-3 px-2">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => toggleHandler()}
        >
          Icon
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
          placeholder="search"
          className="h-10 w-96 rounded-l-full p-3"
        />
        <button className="h-10 rounded-r-full px-2 bg-slate-400 ">
          Search
        </button>
      </div>
      <div>
        <img
          className="h-14"
          src="https://cdn.imgbin.com/3/12/17/imgbin-computer-icons-avatar-user-login-avatar-man-wearing-blue-shirt-illustration-mJrXLG07YnZUc2bH5pGfFKUhX.jpg"
          alt="user-icon"
        />
      </div>
    </div>
  );
};

export default Header;
