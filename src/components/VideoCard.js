import React from "react";

const VideoCard = ({ video }) => {
  const { snippet, statistics } = video;
  const { title, thumbnails, channelTitle } = snippet;
  const title2 = `${title.substring(0, 75)}....`;

  return (
    <div className="h-72 w-80 my-3">
      <div>
        <img
          src={thumbnails?.standard?.url}
          alt="thumbnails"
          className="h-44 w-80 object-cover rounded-xl"
        />
      </div>
      <div>
        <div className="font-bold text-md ">
          {title.length < 75 ? title : title2}
        </div>
        <div className="text-slate-600">{channelTitle}</div>
        <div className="text-slate-600">{statistics?.viewCount}</div>
      </div>
    </div>
  );
};

export default VideoCard;
