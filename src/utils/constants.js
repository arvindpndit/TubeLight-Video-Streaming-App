export const YOUTUBE_VIDEO_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  process.env.REACT_APP_API_KEY;

export const YOUTUBE_SEARCH_SUGGESTIONS =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_VIDEO_DATA =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=";

export const YOUTUBE_COMMENT_DATA =
  "https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=";

// {VIDEO_ID}&key={YOUR_API_KEY}

export const YOUTUBES_RECOMMENDED_VIDEOS =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=";

export const COMMENT_REPLIES =
  "https://www.googleapis.com/youtube/v3/comments?part=snippet&parentId=";

//"https://www.googleapis.com/youtube/v3/comments?part=snippet&parentId=${commentId}&key=${API_KEY}"
