import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import LiveChat from "./LiveChat";
import HireMeAd from "./HireMeAd";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../utils/sidebarSlice";
import { YOUTUBE_VIDEO_DATA } from "../utils/constants";
import WatchVideo from "./WatchVideo";
import VideoDescription from "./VideoDescription";

const WatchPage = () => {
  const [videoInfo, setVideoInfo] = useState(null);
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    getVideoData();
    dispatch(closeSidebar());
    window.scrollTo(0, 0);
  }, []);

  async function getVideoData() {
    const data = await fetch(
      YOUTUBE_VIDEO_DATA +
        searchParams.get("v") +
        "&key=" +
        process.env.REACT_APP_API_KEY
    );
    const json = await data.json();
    setVideoInfo(json);
    console.log(json);
  }

  return (
    <div className=" mt-14 flex justify-evenly w-full mb-5">
      <div className="flex flex-col">
        <WatchVideo video={videoInfo} />
        <VideoDescription video={videoInfo} />
      </div>

      <div className="flex flex-col gap-6">
        <LiveChat />
        <HireMeAd />
      </div>
    </div>
  );
};

export default WatchPage;
