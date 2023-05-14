import React from "react";
import RecommendedVideo from "./RecommendedVideo";
import { Link } from "react-router-dom";

const RecommendedVideos = ({ videos }) => {
  console.log(videos);
  return (
    <div className="w-[400px]">
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
