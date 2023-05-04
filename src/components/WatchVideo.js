import React from "react";
import { useSearchParams } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { BsBell, BsChevronDown, BsThreeDots } from "react-icons/bs";
import { BiLike, BiDislike, BiDownload } from "react-icons/bi";
import { TbShare3 } from "react-icons/tb";

const WatchVideo = ({ video }) => {
  const [searchParams] = useSearchParams();

  if (!video) {
    return <p>Loading...</p>;
  }

  const title = video?.items[0]?.snippet?.localized?.title;
  const channelName = video?.items[0]?.snippet?.channelTitle;

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
            <div className="font-lg font-semibold">{channelName}</div>
          </div>
          <div className="flex gap-3">
            <div className="px-3 py-1.5 rounded-full  font-semibold bg-gray-100 hover:bg-gray-200">
              Join
            </div>
            <div className="px-3 py-1.5 rounded-full  font-semibold bg-gray-100 hover:bg-gray-200 flex items-center gap-3">
              <BsBell />
              Subscribed
              <BsChevronDown />
            </div>
          </div>
          <div className="flex gap-3">
            <div className="px-3 py-1.5 rounded-full  font-semibold bg-gray-100 hover:bg-gray-200 flex ">
              <BiLike className="mx-2 text-xl" />
              <div className="text-md mr-2 border-r pr-2">1.4k</div>
              <BiDislike className="mx-2  text-xl" />
            </div>
            <div className="px-3 py-1/5 rounded-full  font-semibold bg-gray-100 hover:bg-gray-200 flex items-center gap-2">
              <TbShare3 />
              <div>Share</div>
            </div>
            <div className="px-3 py-1.5 rounded-full  font-semibold bg-gray-100 hover:bg-gray-200 flex gap-3 items-center">
              <BiDownload />
              <div>Download</div>
            </div>
            <div className="px-3 py-1.5 rounded-full  font-semibold bg-gray-100 hover:bg-gray-200 flex items-center">
              <BsThreeDots />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchVideo;
