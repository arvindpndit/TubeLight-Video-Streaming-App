import React, { useEffect } from "react";
import Sidebar from "./sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col sm:flex-row">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
