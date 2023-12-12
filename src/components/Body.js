import React, { useEffect } from "react";
import Sidebar from "./sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";

const Body = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col sm:flex-row">
      <Header />
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
