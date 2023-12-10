import React from "react";
import user from "../../assets/user.jpg";
import banner from "../../assets/github_banner.png";

const HireMeAd = () => {
  return (
    <div className=" px-2 md:px-4">
      <div className="w-full md:w-auto h-auto border rounded-xl">
        <div
          style={{ "--image-url": `url(${banner})` }}
          className="h-[70px] border-b bg-[image:var(--image-url)] bg-cover bg-center rounded-t-xl"
        ></div>
        <div className="flex flex-col justify-between items-center md:items-stretch md:flex-row h-auto md:h-[90px] px-4 py-3 md:py-4">
          <div className="flex gap-3 md:gap-4 items-center">
            <img src={user} alt="" className="h-12 md:h-14 rounded-full" />
            <div>
              <div className="font-semibold text-md md:text-lg">
                ARVIND PANDIT
              </div>
              <div className="text-xs md:text-sm text-gray-500">
                <span className="font-semibold text-black">Ad: </span>
                Open to Work
              </div>
            </div>
          </div>
          <button className="px-4 py-2 md:px-6 md:py-2 bg-blue-700 rounded-full text-white font-bold text-xs md:text-sm hover:bg-blue-800">
            Hire Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default HireMeAd;
