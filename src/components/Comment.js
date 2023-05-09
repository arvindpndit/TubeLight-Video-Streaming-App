import React, { useEffect, useState } from "react";
import user from "../assets/user.jpg";
import {
  BiLike,
  BiDislike,
  BiDownload,
  BiCloudLightRain,
} from "react-icons/bi";
import { COMMENT_REPLIES } from "../utils/constants";
import CommentReplies from "./CommentReply";
import CommentRepliesList from "./CommentRepliesList";

const Comment = ({ comment }) => {
  const [replies, setReplies] = useState([]);

  useEffect(() => {
    getCommentReplies();
  }, []);

  const title = comment?.snippet?.topLevelComment.snippet.authorDisplayName;
  const commentText = comment.snippet.topLevelComment.snippet.textDisplay;
  const userProfilePicture =
    comment.snippet.topLevelComment.snippet.authorProfileImageUrl;

  const getCommentReplies = async () => {
    const data = await fetch(
      `${COMMENT_REPLIES}${comment.id}&key=${process.env.REACT_APP_API_KEY}`
    );
    const json = await data.json();
    setReplies(json.items);
  };

  return (
    <>
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
      <CommentRepliesList replies={replies} />
    </>
  );
};

export default Comment;
