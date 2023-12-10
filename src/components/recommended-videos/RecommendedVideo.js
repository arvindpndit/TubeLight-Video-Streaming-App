const RecommendedVideo = ({ video }) => {
  if (!video) return;
  const thumbnail = video.snippet.thumbnails.medium.url;
  const title = video.snippet.title;
  const channelName = video.snippet.channelTitle;
  return (
    <div className=" flex gap-3 my-2">
      <div className="w-60 ">
        <img
          src={thumbnail}
          alt=""
          className="h-24 w-60 rounded-xl hover:rounded-none duration-300 "
        />
      </div>

      <div className="flex flex-col gap-2 w-72">
        <div className="text-sm font-semibold">
          {title.substring(0, 70) + "..."}
        </div>
        <div className="text-xs">{channelName}</div>
      </div>
    </div>
  );
};

export default RecommendedVideo;
