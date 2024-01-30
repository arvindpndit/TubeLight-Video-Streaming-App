import React from "react";

const VideoCard = ({ video }) => {
  const { snippet, statistics } = video;
  const { title, thumbnails, channelTitle } = snippet;
  const title2 = `${title.substring(0, 75)}....`;

  return (
    <div className="min-h-72 w-[350px] my-8  hover:cursor-pointer ">
      <div>
        <img
          src={thumbnails?.maxres?.url}
          alt="thumbnails"
          className="h-44 w-[350px] object-cover rounded-xl hover:rounded-none duration-300"
        />
      </div>
      <div>
        <div className="font-semibold text-md my-2 ">
          {title.length < 75 ? title : title2}
        </div>
        <div className="text-slate-600 ">{channelTitle}</div>
        <div className="text-slate-600">
          {(statistics?.viewCount / 1000000).toFixed(1) + "M views"}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
