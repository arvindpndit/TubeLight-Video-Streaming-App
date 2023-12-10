import React, { useEffect, useState } from "react";
import { json, useSearchParams } from "react-router-dom";

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
    //console.log(searchVideos);
  }
  return (
    <div className="w-full sm:w-10/12 mx-auto mt-16">
      {searchVideos.map((video) => (
        <div key={video.id.videoId} className="flex  mb-2 ">
          <img
            className="h-52 w-96 object-cover mr-4 rounded-xl"
            src={video?.snippet?.thumbnails.high.url}
            alt="Video Thumbnail"
          />
          <div className="flex-1">
            <h3 className="text-lg font-medium text-gray-900 mb-1 line-clamp-2">
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
      ))}
    </div>
  );
};

export default SearchPage;
