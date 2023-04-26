import React from "react";

const VideoCard = ({ video }) => {
  const { snippet, statistics } = video;
  const { title, thumbnails, channelTitle } = snippet;
  const title2 = `${title.substring(0, 75)}....`;

  return (
    <div className="min-h-72 w-96 my-10 hover:scale-95 duration-200 hover:cursor-pointer ">
      <div>
        <img
          src={thumbnails?.standard?.url}
          alt="thumbnails"
          className="h-52 w-96 object-cover rounded-xl"
        />
      </div>
      <div>
        <div className="font-bold text-lg ">
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
