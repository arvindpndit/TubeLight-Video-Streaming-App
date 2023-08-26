import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import LiveChat from "./LiveChat";
import HireMeAd from "./HireMeAd";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../utils/sidebarSlice";
import {
  YOUTUBES_RECOMMENDED_VIDEOS,
  YOUTUBE_COMMENT_DATA,
  YOUTUBE_VIDEO_DATA,
} from "../utils/constants";
import WatchVideo from "./WatchVideo";
import VideoDescription from "./VideoDescription";
import Comments from "./Comments";
import RecommendedVideos from "./RecommendedVideos";

const WatchPage = () => {
  const [videoInfo, setVideoInfo] = useState(null);
  const [comments, setComments] = useState([]);
  const [searchParams] = useSearchParams();
  const [recommendedVideos, setRecommendedVideos] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getVideoData();
    getCommentData();
    getRecommendedVideos();
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
  }

  async function getCommentData() {
    const data = await fetch(
      YOUTUBE_COMMENT_DATA +
        searchParams.get("v") +
        "&key=" +
        process.env.REACT_APP_API_KEY
    );
    const json = await data.json();
    setComments(json.items);
  }

  async function getRecommendedVideos() {
    const data = await fetch(
      YOUTUBES_RECOMMENDED_VIDEOS +
        process.env.REACT_APP_API_KEY +
        "&part=snippet&maxResults=50&type=video&relatedtovideoid=" +
        searchParams.get("v")
    );
    const json = await data.json();

    setRecommendedVideos(json.items);
  }

  return (
    <div className="mt-14 flex flex-col md-custom:flex-row w-full mb-5">
      <div className="flex flex-col w-full md-custom:w-2/3">
        <WatchVideo video={videoInfo} />
        <VideoDescription video={videoInfo} />
        <Comments comments={comments} />
      </div>

      <div className="flex flex-col w-full md-custom:w-1/3  gap-6 mt-6 md:mt-0">
        <LiveChat />
        <HireMeAd />
        <RecommendedVideos videos={recommendedVideos} />
      </div>
    </div>
  );
};

export default WatchPage;
