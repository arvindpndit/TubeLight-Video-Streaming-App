export const YOUTUBE_VIDEO_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  process.env.REACT_APP_API_KEY;

export const YOUTUBE_SEARCH_SUGGESTIONS =
  "https://corsproxy.io/?http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_VIDEO_DATA =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=";

export const YOUTUBE_COMMENT_DATA =
  "https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=";

export const YOUTUBES_RECOMMENDED_VIDEOS =
  "https://www.googleapis.com/youtube/v3/search?key=";

export const COMMENT_REPLIES =
  "https://www.googleapis.com/youtube/v3/comments?part=snippet&parentId=";

export const YOUTUBE_SEARCH_RESULTS =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=";
