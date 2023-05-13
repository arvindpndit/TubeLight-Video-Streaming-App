import React from "react";
import { BiLike, BiDislike } from "react-icons/bi";
import { AiFillCaretDown } from "react-icons/ai";

const CommentReply = ({ reply }) => {
  //if (reply.length === 0) return;
  const title = reply?.snippet?.authorDisplayName;
  const commentText = reply?.snippet?.textDisplay;
  const userProfilePicture = reply?.snippet?.authorProfileImageUrl;
  //console.log(commentText);
  return (
    <div className="flex items-start gap-3 my-7 ml-12 ">
      <img
        src={userProfilePicture}
        alt=""
        className=" rounded-full object-contain h-10"
      />
      <div className="flex flex-col ">
        <div className="text-sm font-semibold ">{title}</div>
        <div
          className="text-sm mt-1"
          dangerouslySetInnerHTML={{
            __html: commentText,
          }}
        ></div>
        <div className="flex gap-10  mt-2 items-center">
          <BiLike className="text-xl" />
          <BiDislike className="text-xl" />
          <div className="text-sm font-semibold">Reply</div>
        </div>
      </div>
    </div>
  );
};

export default CommentReply;
