import React from "react";
import CommentReply from "./CommentReply";

const CommentRepliesList = ({ replies }) => {
  //if (!replies) return;
  return (
    <div>
      {replies.map((reply) => {
        return <CommentReply reply={reply} />;
      })}
    </div>
  );
};

export default CommentRepliesList;
