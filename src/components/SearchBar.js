import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsSearch } from "react-icons/bs";

import { YOUTUBE_SEARCH_SUGGESTIONS } from "../utils/constants";
import { cacheTheResult } from "../utils/searchSlice";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestionOnFocus, setShowSuggestionOnFocus] = useState(false);

  const searchCachedResult = useSelector((store) => store.search);
  const dispatch = useDispatch();

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
  )
}

export default SearchBar