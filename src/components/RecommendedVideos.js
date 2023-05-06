import React from "react";
import RecommendedVideo from "./RecommendedVideo";

const RecommendedVideos = ({ videos }) => {
  if (!videos) return;

  return (
    <div>
      {videos.map((video) => {
        return <RecommendedVideo key={video.id} video={video} />;
      })}
    </div>
  );
};

export default RecommendedVideos;
