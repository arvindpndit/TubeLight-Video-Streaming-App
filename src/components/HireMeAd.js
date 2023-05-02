import React from "react";
import user from "../assets/user.jpg";

const HireMeAd = () => {
  return (
    <div className="w-[400px] h-[180px] border rounded-xl">
      <div className="h-[65px] border-b bg-gradient-to-r from-cyan-500 to-blue-500 rounded-t-xl"></div>
      <div className="flex justify-between items-center h-[115px] px-4">
        <div className="flex gap-3 ">
          <img src={user} alt="" className="h-14 rounded-full" />
          <div>
            <div className="font-semibold">ARVIND PANDIT</div>
            <div className="text-sm text-gray-500">
              <span className="font-semibold text-black">Ad: </span>Frontend
              Developer
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
