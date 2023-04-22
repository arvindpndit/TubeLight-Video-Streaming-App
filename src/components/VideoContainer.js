import React, { useEffect, useState } from "react";
import ButtonList from "./ButtonList";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEO_URL } from "../utils/constants";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  async function getVideos() {
    const data = await fetch(YOUTUBE_VIDEO_URL);
    const json = await data.json();
    setVideos(json.items);
  }

  return (
    <div className="w-10/12 mx-auto">
      <ButtonList />
      <div className="flex flex-wrap justify-evenly">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default VideoContainer;
