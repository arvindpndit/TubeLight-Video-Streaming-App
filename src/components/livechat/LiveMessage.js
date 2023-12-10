import React from "react";
import { FaUserCircle } from "react-icons/fa";

const LiveMessage = ({ name, message }) => {
  return (
    <div className="flex gap-4 px-4 py-2">
      <FaUserCircle className="text-2xl text-blue-500" />
      <div className="flex gap-2">
        <div className="font-semibold text-md text-gray-500">{name}</div>
        <div className="flex items-center">
          <div className="text-sm">{message}</div>
        </div>
      </div>
    </div>
  );
};

export default LiveMessage;
