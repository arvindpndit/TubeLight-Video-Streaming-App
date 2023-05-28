import React, { useEffect, useState } from "react";
import ButtonList from "./ButtonList";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import WatchPage from "./WatchPage";
import Shimmer from "./Shimmer";
import InfiniteScroll from "react-infinite-scroll-component";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [pageToken, setPageToken] = useState("");
  const [hasMore, setHasMore] = useState(true);
  const [showShimmer, setShowShimmer] = useState(true);

  useEffect(() => {
    getVideos();
  }, []);

  async function getVideos() {
    const data = await fetch(`${YOUTUBE_VIDEO_URL}&pageToken=${pageToken}`);
    const json = await data.json();

    if (json.items.length > 0) {
      setVideos((prevVideos) => [...prevVideos, ...json.items]);
      setPageToken(json.nextPageToken);
    } else {
      setHasMore(false);
    }

    setShowShimmer(false);
  }

  return showShimmer ? (
    <Shimmer />
  ) : (
    <div className="w-10/12 mx-auto mt-10">
      <ButtonList />

      <InfiniteScroll
        dataLength={videos.length}
        next={getVideos}
        hasMore={hasMore}
        loader={<h4 className="mx-auto">Loading...</h4>}
        endMessage={<p className="mx-auto">No more videos to load</p>}
      >
        <div className="flex flex-wrap justify-evenly">
          {videos.map((video) => (
            <Link to={"/watch?v=" + video.id} key={video.id}>
              <VideoCard video={video} />
            </Link>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default VideoContainer;
