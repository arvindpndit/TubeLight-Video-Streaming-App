import React, { useEffect, useState } from "react";
import { toggleSidebar } from "../utils/sidebarSlice";
import { useDispatch, useSelector } from "react-redux";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsCheckLg, BsSearch } from "react-icons/bs";
import user from "../assets/user.jpg";
import tubelight from "../assets/Tubelight.png";
import { YOUTUBE_SEARCH_SUGGESTIONS } from "../utils/constants";
import { cacheTheResult } from "../utils/searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const toggleHandler = () => {
    dispatch(toggleSidebar());
  };

  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestionOnFocus, setShowSuggestionOnFocus] = useState(false);

  const searchCachedResult = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      searchCachedResult[searchText]
        ? setSuggestions(searchCachedResult[searchText])
        : getSearchSuggestionsResult();
      //getSearchSuggestionsResult();
    }, 200);

    return () => clearTimeout(timer);
  }, [searchText]);

  const getSearchSuggestionsResult = async () => {
    try {
      const data = await fetch(YOUTUBE_SEARCH_SUGGESTIONS + searchText);
      const json = await data.json();
      setSuggestions(json[1]);
    } catch (error) {
      console.error(`Oops!! Something went wrong : ${error.message}`);
    }

    //updating the state
    dispatch(
      cacheTheResult({
        [searchText]: suggestions,
      })
    );
  };

  return (
    <div className="h-14 z-30 flex justify-between px-6 fixed w-full bg-white  ">
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

      <div className="flex flex-col">
        <div className=" md:w-[400px] lg:w-[570px] hidden md:flex items-center mt-2">
          <input
            type="text"
            placeholder="Search"
            className="h-10 w-full rounded-l-full p-3 border shadow-sm outline-none"
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
          <div className="hidden lg:block font-bold text-lg text-gray-200 hover:text-gray-400 hover:cursor-pointer">
            Made by Arvind
          </div>
        </div>
        <img
          className="h-10 w-10 rounded-full hover:cursor-pointer  "
          src={user}
          alt="user-icon"
        />
      </div>
    </div>
  );
};

export default Header;
