import React from "react";
import { useSearchParams } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { BsBell, BsChevronDown, BsThreeDots } from "react-icons/bs";
import { BiLike, BiDislike, BiDownload } from "react-icons/bi";
import { TbShare3 } from "react-icons/tb";

const WatchVideo = ({ video }) => {
  const [searchParams] = useSearchParams();

  if (!video) {
    return;
  }

  const title = video?.items[0]?.snippet?.localized?.title;
  const channelName = video?.items[0]?.snippet?.channelTitle;
  const likeCount = video?.items[0]?.statistics?.likeCount;

  return (
    <div className="p-4 md:p-6">
      <iframe
        width="100%"
        height="240"
        src={
          "https://www.youtube.com/embed/" +
          searchParams.get("v") +
          "?autoplay=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="mt-6"
      ></iframe>
      <div className="mt-4">
        <div className="text-xl text-center md:text-left mb-2 font-semibold ">
          {title !== undefined && title !== null && title.substring(0, 93)}
        </div>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-3">
          <div className="flex items-center ">
            <FaUserCircle className="text-2xl md:text-3xl text-blue-500" />
            <div className="font-medium text-sm md:text-lg ">
              {channelName.substring(0, 18)}
            </div>
          </div>
          <div className="flex gap-2 md:gap-3 mt-2 md:mt-0">
            <div className="px-2 py-1 rounded-full text-xs md:text-sm bg-gray-100 hover:bg-gray-200">
              Join
            </div>
            <div className="px-2 py-1 rounded-full text-xs md:text-sm bg-gray-100 hover:bg-gray-200 flex items-center gap-2">
              <BsBell />
              <div className="font-medium">Subscribed</div>
              <BsChevronDown />
            </div>
          </div>
          <div className="flex gap-2 md:gap-3 mt-2 md:mt-0">
            <div className="px-2 py-1 rounded-full text-xs md:text-sm bg-gray-100 hover:bg-gray-200 flex items-center">
              <BiLike className="text-lg md:text-xl" />
              <div className="text-xs md:text-sm mr-1 md:border-r md:pr-1 font-medium">
                {(likeCount / 10000).toFixed(1) + "K"}
              </div>
              <BiDislike className="text-lg md:text-xl" />
            </div>
            <div className="px-2 py-1 rounded-full text-xs md:text-sm bg-gray-100 hover:bg-gray-200 flex items-center gap-1">
              <TbShare3 />
              <div className="font-medium">Share</div>
            </div>
            <div className="px-2 py-1 rounded-full text-xs md:text-sm bg-gray-100 hover:bg-gray-200 flex items-center gap-2">
              <BiDownload />
              <div className="font-medium">Download</div>
            </div>
            <div className="px-2 py-1 rounded-full text-xs md:text-sm bg-gray-100 hover:bg-gray-200 flex items-center">
              <BsThreeDots />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchVideo;
