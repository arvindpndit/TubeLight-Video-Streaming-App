import React from "react";

const VideoDescription = ({ video }) => {
  if (!video) {
    return <p>Loading...</p>;
  }

  const description = video?.items[0]?.snippet?.localized?.description;
  const formattedDescription = description.replace(/\n/g, "<br>");

  return (
    <div className="w-[850px]  border rounded-xl bg-gray-100 py-2 px-4 mt-6">
      <div
        dangerouslySetInnerHTML={{ __html: formattedDescription }}
        className="text-sm"
      ></div>
    </div>
  );
};

export default VideoDescription;
