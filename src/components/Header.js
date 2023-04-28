import React, { useEffect, useState } from "react";
import { toggleSidebar } from "../utils/sidebarSlice";
import { useDispatch } from "react-redux";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsCheckLg, BsSearch } from "react-icons/bs";
import user from "../assets/user.jpg";
import tubelight from "../assets/Youtube.png";
import { YOUTUBE_SEARCH_SUGGESTIONS } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const toggleHandler = () => {
    dispatch(toggleSidebar());
  };

  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestionOnFocus, setShowSuggestionOnFocus] = useState(false);
  //console.log(searchText);

  useEffect(() => {
    const timer = setTimeout(() => {
      getSearchSuggestionsResult();
    }, 200);

    return () => clearTimeout(timer);
  }, [searchText]);

  const getSearchSuggestionsResult = async () => {
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTIONS + searchText);
    const json = await data.json();
    console.log(json);
    setSuggestions(json[1]);
  };

  return (
    <div className="h-14 z-10 flex justify-between px-6 fixed w-full bg-white ">
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

      <div className="flex flex-col">
        <div className="flex items-center mt-2">
          <input
            type="text"
            placeholder="Search"
            className="h-10 w-[570px] rounded-l-full p-3 border shadow-sm outline-none"
            onChange={(e) => setSearchText(e.target.value)}
            onFocus={() => setShowSuggestionOnFocus(true)}
            onBlur={() => setShowSuggestionOnFocus(false)}
          />
          <button className="h-10 rounded-r-full px-6 bg-gray-100 hover:bg-gray-200 border  ">
            <BsSearch />
          </button>
        </div>
        {suggestions.length > 0 && showSuggestionOnFocus && (
          <div className="relative w-[570px] bg-white rounded-xl shadow-2xl py-5 mt-2 border">
            {suggestions.map((suggestion, index) => {
              return (
                <div
                  key={index}
                  className=" px-5 py-1 min-h-0 text-lg hover:bg-gray-200 flex items-center gap-4"
                >
                  <BsSearch />
                  {suggestion}
                </div>
              );
            })}
          </div>
        )}
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
