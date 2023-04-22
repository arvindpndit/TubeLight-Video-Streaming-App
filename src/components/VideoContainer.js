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

  console.log(videos);

  return (
    <div className="w-10/12">
      <ButtonList />
      <div className="flex flex-wrap justify-evenly">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
      {/* <VideoCard videos={videos[0]} /> */}
    </div>
  );
};

export default VideoContainer;
