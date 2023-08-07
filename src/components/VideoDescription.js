import React, { useState } from "react";

const VideoDescription = ({ video }) => {
  const [showMore, setShowMore] = useState(true);
  if (!video) {
    return;
  }

  const description = video?.items[0]?.snippet?.localized?.description;
  const formattedDescription = description.replace(/\n/g, "<br>");

  return (
    <div className="w-full md:w-[850px] border rounded-xl bg-gray-100 py-2 px-4 mt-6">
      <div
        dangerouslySetInnerHTML={{
          __html: formattedDescription,
        }}
        className={`text-sm ${showMore ? "h-16" : "h-auto"} overflow-hidden`}
      ></div>

      <button
        onClick={() => setShowMore(!showMore)}
        className="text-gray-800 mt-2"
      >
        {showMore ? "Show more" : "Show less"}
      </button>
    </div>
  );
};

export default VideoDescription;
