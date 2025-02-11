import React from 'react';
import { BsDot } from 'react-icons/bs';
import { formatViewsCount, timeAgo } from '../../utils/helper';

const VideoCard = ({ video }) => {
  const { snippet, statistics } = video;
  const { title, thumbnails, channelTitle, publishedAt } = snippet;
  const title2 = `${title.substring(0, 75)}....`;

  return (
    <div className="w-[350px] my-3  hover:cursor-pointer ">
      <div>
        <img
          src={thumbnails?.maxres?.url}
          alt="thumbnails"
          className="h-48 w-[350px] object-cover rounded-xl hover:rounded-none duration-300"
        />
      </div>
      <div>
        <div className="font-semibold text-md my-2 ">
          {title.length < 75 ? title : title2}
        </div>
        <div className="text-slate-600 ">{channelTitle}</div>
        <div className="text-slate-600 flex items-center gap-0.5">
          {formatViewsCount(statistics.viewCount)}
          <BsDot />
          {timeAgo(publishedAt)}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;

