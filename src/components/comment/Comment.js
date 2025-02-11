import React, { useEffect, useState } from 'react';
import { BiLike, BiDislike } from 'react-icons/bi';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import { COMMENT_REPLIES } from '../../utils/constants';
import CommentRepliesList from './CommentRepliesList';

const Comment = ({ comment }) => {
  //console.log(comment);
  const [replies, setReplies] = useState([]);
  const [showreplies, setShowReplies] = useState(false);

  useEffect(() => {
    getCommentReplies();
  }, []);

  const title = comment?.snippet?.topLevelComment.snippet.authorDisplayName;
  const replyCount = comment?.snippet?.totalReplyCount;
  const commentText = comment.snippet.topLevelComment.snippet.textDisplay;
  const userProfilePicture =
    comment.snippet.topLevelComment.snippet.authorProfileImageUrl;

  const getCommentReplies = async () => {
    const data = await fetch(
      `${COMMENT_REPLIES}${comment.id}&key=${process.env.REACT_APP_API_KEY}`,
    );
    const json = await data.json();
    setReplies(json.items);
  };

  return (
    <>
      <div className="flex items-start gap-3 my-7">
        {userProfilePicture && (
          <img
            src={userProfilePicture}
            alt=""
            className=" rounded-full object-contain h-10"
          />
        )}
        <div className="flex flex-col ">
          <div className="text-sm font-semibold">{title}</div>
          <div
            className="text-sm mt-1"
            dangerouslySetInnerHTML={{
              __html: commentText,
            }}
          ></div>
          <div className="flex gap-6  mt-2 items-center">
            <BiLike className="text-3xl  p-1 rounded-full hover:bg-gray-200" />
            <BiDislike className="text-3xl  p-1 rounded-full hover:bg-gray-200" />
            <div className="text-sm font-semibold  py-1 px-2 hover:bg-gray-200 rounded-3xl">
              Reply
            </div>
          </div>
          {replyCount !== 0 && (
            <div className="font-semibold text-sm text-blue-600 flex rounded-3xl hover:bg-blue-100 mt-2 items-center  p-2 w-28 justify-between ">
              {!showreplies ? <AiFillCaretDown /> : <AiFillCaretUp />}

              <button onClick={() => setShowReplies(!showreplies)}>
                {replyCount + ' replies'}
              </button>
            </div>
          )}
        </div>
      </div>

      {showreplies && <CommentRepliesList replies={replies} />}
    </>
  );
};

export default Comment;

