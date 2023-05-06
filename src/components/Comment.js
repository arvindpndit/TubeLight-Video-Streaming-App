import React from "react";
import user from "../assets/user.jpg";
import { BiLike, BiDislike, BiDownload } from "react-icons/bi";

const Comment = ({ comment }) => {
  //console.log(comment);
  const title = comment.snippet.topLevelComment.snippet.authorDisplayName;
  const commentText = comment.snippet.topLevelComment.snippet.textDisplay;
  const userProfilePicture =
    comment.snippet.topLevelComment.snippet.authorProfileImageUrl;

  return (
    <div className="flex items-start gap-3 my-4">
      <img
        src={userProfilePicture}
        alt=""
        className=" rounded-full object-contain h-10"
      />
      <div className="flex flex-col ">
        <div className="">{title}</div>
        <div
          className="text-sm"
          dangerouslySetInnerHTML={{
            __html: commentText,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Comment;
