import React, { useEffect, useState } from "react";
import { Link, json, useSearchParams } from "react-router-dom";

import { YOUTUBE_SEARCH_RESULTS } from "../../utils/constants";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const videoTitle = searchParams.get("query");
  const [searchVideos, setSearchVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, [videoTitle]);

  async function getVideos() {
    const data = await fetch(
      `${YOUTUBE_SEARCH_RESULTS}${videoTitle}&type=video&key=${process.env.REACT_APP_API_KEY}`
    );
    const json = await data.json();
    setSearchVideos(json?.items);
    //console.log(searchVideos[0].id.videoId);
  }
  return (
    <div className="w-full sm:w-10/12 mx-auto mt-16">
      {searchVideos &&
        searchVideos.map((video) => (
          <Link to={"/watch?v=" + video?.id?.videoId} key={video?.id?.videoId}>
            <div className="flex p-4 bg-white  sm:mb-4 ">
              <img
                className="h-24 w-40 sm:h-52 sm:w-96 object-cover mr-4 rounded-lg"
                src={video?.snippet?.thumbnails.high.url}
                alt="Video Thumbnail"
              />
              <div className="flex-1">
                <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-1 line-clamp-2">
                  {video?.snippet?.title}
                </h3>
                <p className="text-sm text-gray-600 mb-1 line-clamp-1">
                  {video?.snippet?.channelTitle}
                </p>
                <p className="text-sm text-gray-600">
                  {video?.snippet?.publishedAt}
                </p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default SearchPage;
