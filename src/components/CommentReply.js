import React from "react";

const CommentReply = ({ reply }) => {
  //if (reply.length === 0) return;
  const title = reply?.snippet?.authorDisplayName;
  const commentText = reply?.snippet?.textDisplay;
  const userProfilePicture = reply?.snippet?.authorProfileImageUrl;
  //console.log(commentText);
  return (
    <div className="flex items-start gap-3 my-4 ml-12 border-l">
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

export default CommentReply;
