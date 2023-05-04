import React from "react";
import user from "../assets/user.jpg";
import banner from "../assets/github_banner.png";

const HireMeAd = () => {
  return (
    <div className="w-[400px] h-[160px] border rounded-xl">
      <div
        style={{ "--image-url": `url(${banner})` }}
        className="h-[70px] border-b bg-[image:var(--image-url)] bg-cover bg-center rounded-t-xl"
      ></div>
      <div className="flex justify-between items-center h-[90px] px-4">
        <div className="flex gap-3 ">
          <img src={user} alt="" className="h-14 rounded-full" />
          <div>
            <div className="font-semibold">ARVIND PANDIT</div>
            <div className="text-sm text-gray-500">
              <span className="font-semibold text-black text-sm">Ad: </span>
              Open to Work
            </div>
          </div>{" "}
        </div>
        <button className="px-6 py-2 bg-blue-700 rounded-full text-white font-bold text-sm hover:bg-blue-800">
          Hire Me
        </button>
      </div>
    </div>
  );
};

export default HireMeAd;
