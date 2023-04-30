import React from "react";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const [seachParams] = useSearchParams();
  //console.log(seachParams.get("v"));
  return (
    <div className="mx-auto mt-14">
      <iframe
        width="1000"
        height="580"
        src={
          "https://www.youtube.com/embed/" +
          seachParams.get("v") +
          "?autoplay=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="p-5 ml-6 rounded-3xl"
      ></iframe>
    </div>
  );
};

export default WatchPage;
