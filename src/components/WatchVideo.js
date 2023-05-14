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
    <div>
      <iframe
        width="850"
        height="478"
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
      <div>
        <div className="text-xl mt-4 mb-2 font-semibold ">
          {title !== undefined && title !== null && title.substring(0, 93)}
        </div>
        <div className="flex justify-between">
          <div className="flex gap-3 items-center ">
            <FaUserCircle className="text-3xl text-blue-500" />
            <div className="font-lg ">{channelName.substring(0, 18)}</div>
          </div>
          <div className="flex gap-3">
            <div className="px-3 py-1.5 rounded-full   bg-gray-100 hover:bg-gray-200 text-sm font-semibold">
              Join
            </div>
            <div className="px-3 py-1.5 rounded-full   bg-gray-100 hover:bg-gray-200 flex items-center gap-3">
              <BsBell />
              <div className="text-sm font-semibold">Subscribed</div>
              <BsChevronDown />
            </div>
          </div>
          <div className="flex gap-3">
            <div className="px-3 py-1.5 rounded-full  bg-gray-100 hover:bg-gray-200 flex ">
              <BiLike className="mx-2 text-lg" />
              <div
                className="text-sm mr-2 border-r pr-2
              font-semibold"
              >
                {(likeCount / 10000).toFixed(1) + "K"}
              </div>
              <BiDislike className="mx-2  text-lg" />
            </div>
            <div className="px-3 py-1/5 rounded-full   bg-gray-100 hover:bg-gray-200 flex items-center gap-2">
              <TbShare3 />
              <div
                className="text-sm
              font-semibold"
              >
                Share
              </div>
            </div>
            <div className="px-3 py-1.5 rounded-full   bg-gray-100 hover:bg-gray-200 flex gap-3 items-center">
              <BiDownload />
              <div className="text-sm font-semibold">Download</div>
            </div>
            <div className="px-3 py-1.5 rounded-full   bg-gray-100 hover:bg-gray-200 flex items-center">
              <BsThreeDots />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchVideo;
