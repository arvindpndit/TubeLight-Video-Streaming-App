import Comment from "./Comment";
import user from "../assets/user.jpg";
import { FaRegSmileBeam } from "react-icons/fa";
import { MdSort } from "react-icons/md";

const Comments = ({ comments }) => {
  return (
    <div className=" w-[850px]">
      <div className="flex gap-9 my-5">
        <div>Comments</div>
        <div className="flex items-center gap-1">
          <span>
            <MdSort className="text-xl" />
          </span>{" "}
          Sort By
        </div>
      </div>
      <div className="flex gap-3 items-start justify-between my-2">
        <img src={user} alt="" className=" rounded-full object-contain h-10" />
        <div className="flex flex-col w-full gap-2">
          <input
            type="text"
            className=" w-fulborder-b w-full text-sm outline-none border-b-2 focus:border-blue-500 "
            placeholder="Add a comment..."
          />
          <div className="flex justify-between">
            <FaRegSmileBeam className="text-xl" />
            <div className="flex gap-3">
              <div className="hover:bg-gray-100 text-sm py-2 px-3 rounded-3xl">
                Cancel
              </div>
              <div className="bg-gray-100 text-sm py-2 px-3 rounded-3xl">
                Comment
              </div>
            </div>
          </div>
        </div>
      </div>
      {comments.map((comment) => {
        return <Comment comment={comment} key={comment.id} />;
      })}
    </div>
  );
};

export default Comments;
