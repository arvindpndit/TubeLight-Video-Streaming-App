import React, { useEffect, useState } from 'react';
import VideoCard from './VideoCard';
import { YOUTUBE_VIDEO_URL } from '../../utils/constants';
import { Link } from 'react-router-dom';
import Shimmer from '../ui/Shimmer';
import InfiniteScroll from 'react-infinite-scroll-component';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [pageToken, setPageToken] = useState('');
  const [hasMore, setHasMore] = useState(true);
  const [showShimmer, setShowShimmer] = useState(true);

  useEffect(() => {
    getVideos();
  }, []);

  async function getVideos() {
    const data = await fetch(`${YOUTUBE_VIDEO_URL}&pageToken=${pageToken}`);
    const json = await data.json();

    if (json?.items?.length > 0) {
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
    <div className="w-full mx-auto mt-2 px-2 md:px-4 lg:px-6">
      <InfiniteScroll
        dataLength={videos.length}
        next={getVideos}
        hasMore={hasMore}
        loader={<h4 className="mx-auto">Loading...</h4>}
        endMessage={<p className="mx-auto">No more videos to load</p>}
      >
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-16">
          {videos.map((video) => (
            <Link to={'/watch?v=' + video?.id} key={video?.etag}>
              <VideoCard video={video} />
            </Link>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default VideoContainer;

