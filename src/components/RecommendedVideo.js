const RecommendedVideo = ({ video }) => {
  if (!video) return;
  const thumbnail = video.snippet.thumbnails.medium.url;
  const title = video.snippet.title;
  const channelName = video.snippet.channelTitle;
  return (
    <div className="border flex gap-3 my-2">
      <div>
        <img src={thumbnail} alt="" className="h-24 w-44 rounded-xl " />
      </div>

      <div className="flex flex-col">
        <div>{title}</div>
        <div className="text-sm">{channelName}</div>
      </div>
    </div>
  );
};

export default RecommendedVideo;
