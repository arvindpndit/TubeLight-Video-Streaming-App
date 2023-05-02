import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import LiveChat from "./LiveChat";
import HireMeAd from "./HireMeAd";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../utils/sidebarSlice";

const WatchPage = () => {
  const [seachParams] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeSidebar());
  }, []);
  return (
    <div className=" mt-14 flex justify-evenly w-full mb-5">
      <div>
        <iframe
          width="850"
          height="480"
          src={
            "https://www.youtube.com/embed/" +
            seachParams.get("v") +
            "?autoplay=1"
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="mt-6"
        ></iframe>
      </div>

      <div className="flex flex-col gap-6">
        <LiveChat />
        <HireMeAd />
      </div>
    </div>
  );
};

export default WatchPage;
