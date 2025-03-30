import React from 'react';
import { BsDot } from 'react-icons/bs';
import { formatViewsCount, timeAgo } from '../../utils/helper';

const VideoCard = ({ video }) => {
  const { snippet, statistics } = video;
  const { title, thumbnails, channelTitle, publishedAt } = snippet;
  const title2 = `${title.substring(0, 75)}....`;

  return (
    <div className="cursor-pointer ">
      <div className="relative w-full aspect-[16/9]">
        <img
          src={thumbnails?.maxres?.url}
          alt="thumbnails"
          className=" object-cover rounded-xl hover:rounded-none duration-300"
        />
      </div>
      <div className="mt-1 md:mt-3">
        <div className="font-semibold text-sm line-clamp-2">
          {title.length < 75 ? title : title2}
        </div>
        <p className="text-gray-600 text-xs mt-1">{channelTitle}</p>
        <div className="text-gray-600 text-xs flex items-center gap-1 mt-1">
          {formatViewsCount(statistics.viewCount)}
          <BsDot />
          {timeAgo(publishedAt)}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;

