export const YOUTUBE_VIDEO_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  process.env.REACT_APP_API_KEY;

export const YOUTUBE_SEARCH_SUGGESTIONS =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
