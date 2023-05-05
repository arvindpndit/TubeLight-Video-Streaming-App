import React, { useEffect, useState } from "react";
import ButtonList from "./ButtonList";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import WatchPage from "./WatchPage";
import Shimmer from "./Shimmer";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [showShimmer, setShowshimmer] = useState(true);

  useEffect(() => {
    getVideos();
  }, []);

  async function getVideos() {
    const data = await fetch(YOUTUBE_VIDEO_URL);
    const json = await data.json();
    setVideos(json.items);
    setShowshimmer(false);
    //console.log(videos);
  }

  return showShimmer ? (
    <Shimmer />
  ) : (
    <div className="w-10/12 mx-auto mt-10 ">
      <ButtonList />

      <div className="flex flex-wrap justify-evenly">
        {videos.map((video) => (
          <Link to={"/watch?v=" + video.id} key={video.id}>
            <VideoCard video={video} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VideoContainer;
