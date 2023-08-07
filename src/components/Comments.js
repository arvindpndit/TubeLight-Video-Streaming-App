import Comment from "./Comment";
import user from "../assets/user.jpg";
import { FaRegSmileBeam } from "react-icons/fa";
import { MdSort } from "react-icons/md";

const Comments = ({ comments }) => {
  return (
    <div className="w-full md:w-auto  px-2 md:px-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:my-5 p-3 md:px-0">
        <div className="text-lg md:text-xl font-semibold">Comments</div>
        <div className="flex items-center gap-1 text-sm md:text-base font-semibold">
          <span>
            <MdSort className="text-xl" />
          </span>
          <div>Sort By</div>
        </div>
      </div>
      <div className="flex flex-col gap-3 md:flex-row md:items-start my-2 p-3 md:px-0">
        <img
          src={user}
          alt=""
          className="rounded-full object-contain h-10 w-10 md:w-12"
        />
        <div className="flex flex-col w-full gap-2">
          <input
            type="text"
            className="w-full text-sm outline-none border-b border-gray-300 focus:border-blue-500"
            placeholder="Add a comment..."
          />
          <div className="flex justify-between">
            <FaRegSmileBeam className="text-xl" />
            <div className="flex gap-3">
              <div className="hover:bg-gray-100 text-sm py-2 px-3 rounded-3xl font-semibold">
                Cancel
              </div>
              <div className="bg-gray-100 text-sm py-2 px-3 rounded-3xl font-semibold text-gray-600">
                Comment
              </div>
            </div>
          </div>
        </div>
      </div>
      {comments &&
        comments.map((comment) => {
          return <Comment comment={comment} key={comment.id} />;
        })}
    </div>
  );
};

export default Comments;
