import React from "react";
import { useSelector } from "react-redux";
import {
  AiFillHome,
  AiOutlineVideoCamera,
  AiOutlineSetting,
} from "react-icons/ai";
import {
  MdOutlineExplore,
  MdOutlineVideoLibrary,
  MdOutlineWatchLater,
  MdOutlineSubscriptions,
  MdOutlineFeedback,
} from "react-icons/md";
import { BiHistory, BiLike, BiHelpCircle } from "react-icons/bi";
import { RiArrowDownSLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../utils/sidebarSlice";

const Sidebar = () => {
  const toggle = useSelector((store) => store.sidebar.toggle);
  const dispatch = useDispatch();
  const toggleHandler = () => {
    dispatch(toggleSidebar());
  };
  //early return
  if (!toggle) return null;
  return (
    <div className="fixed w-full sm:w-60 mt-[55px] bg-white h-full ">
      <div className="pb-3 mb-3 border-b-[1px]">
        <Link to="/">
          <div className="flex justify-start gap-5  items-center mx-2 rounded-md bg-slate-100  h-10 ">
            <AiFillHome className="text-xl ml-4" />
            <div className=" text-md" onClick={() => toggleHandler()}>
              Home
            </div>
          </div>
        </Link>
        <div className="flex justify-start gap-5  items-center mx-2 rounded-md hover:bg-slate-100  h-10 ">
          <MdOutlineExplore className="text-xl ml-4" />
          <div className=" text-md">Explore</div>
        </div>
        <div className="flex justify-start gap-5 items-center mx-2 rounded-md hover:bg-slate-100  h-10 ">
          <MdOutlineSubscriptions className="text-xl ml-4" />
          <div className="text-md">Subscription</div>
        </div>
      </div>

      <div className="pb-3 mb-3 border-b-[1px]">
        <div className="flex justify-start gap-5  items-center mx-2 rounded-md hover:bg-slate-100  h-10 ">
          <MdOutlineVideoLibrary className="text-xl ml-4" />
          <div className=" text-md">Library</div>
        </div>
        <div className="flex justify-start gap-5  items-center mx-2 rounded-md hover:bg-slate-100  h-10 ">
          <BiHistory className="text-xl ml-4" />
          <div className=" text-md">History</div>
        </div>
        <div className="flex justify-start gap-5 items-center mx-2 rounded-md hover:bg-slate-100  h-10 ">
          <AiOutlineVideoCamera className="text-xl ml-4" />
          <div className="text-md">Your Videos</div>
        </div>
        <div className="flex justify-start gap-5  items-center mx-2 rounded-md hover:bg-slate-100  h-10 ">
          <MdOutlineWatchLater className="text-xl ml-4" />
          <div className=" text-md">Watch Later</div>
        </div>
        <div className="flex justify-start gap-5  items-center mx-2 rounded-md hover:bg-slate-100  h-10 ">
          <BiLike className="text-xl ml-4" />
          <div className=" text-md">Liked Videos</div>
        </div>
        <div className="flex justify-start gap-5 items-center mx-2 rounded-md hover:bg-slate-100  h-10 ">
          <RiArrowDownSLine className="text-xl ml-4" />
          <div className="text-md">Show More</div>
        </div>
      </div>

      <div className="pb-3 mb-3 border-b-[1px]">
        <div className="flex justify-start gap-5  items-center mx-2 rounded-md hover:bg-slate-100  h-10 ">
          <AiOutlineSetting className="text-xl ml-4" />
          <div className=" text-md">Settings</div>
        </div>
        <div className="flex justify-start gap-5  items-center mx-2 rounded-md hover:bg-slate-100  h-10 ">
          <BiHelpCircle className="text-xl ml-4" />
          <div className=" text-md">Help</div>
        </div>
        <div className="flex justify-start gap-5 items-center mx-2 rounded-md hover:bg-slate-100  h-10 ">
          <MdOutlineFeedback className="text-xl ml-4" />
          <div className="text-md">Feedback</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
