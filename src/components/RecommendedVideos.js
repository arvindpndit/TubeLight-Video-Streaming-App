import React from "react";
import RecommendedVideo from "./RecommendedVideo";
import { Link } from "react-router-dom";

const RecommendedVideos = ({ videos }) => {
  console.log(videos);
  return (
    <div className="w-full md:w-[400px] px-2 md:px-4">
      {videos &&
        videos.map((video) => {
          return (
            <Link to={"/watch?v=" + video.id.videoId} key={video.id}>
              <RecommendedVideo key={video.id} video={video} />
            </Link>
          );
        })}
    </div>
  );
};

export default RecommendedVideos;
