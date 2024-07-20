// const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
const GOOGLE_API_KEY = "AIzaSyCK0OACHH6pUEYm_JkRS-ojSok7YBz6-94";

export const YOUTUBE_API =
  `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&q=science+astronomy+technology&type=video&videoDuration=medium&key=${GOOGLE_API_KEY}&videoCategoryId=28&regionCode=US`;
  

export const VIDEO_API =
  "https://youtube.GOOGLEapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  GOOGLE_API_KEY +
  "&id=";

export const YOUTUBE_SEARCH_API =
  "https://suggestqueries.GOOGLE.com/complete/search?client=firefox&ds=yt&key=" +
  GOOGLE_API_KEY +
  "&q=";

export const SEARCH_RESULT_API =
  "https://www.GOOGLEapis.com/youtube/v3/search?part=snippet&maxResults=25&key=" +
  GOOGLE_API_KEY +
  "&q=";

export const COMMENTS_API =
  "https://www.GOOGLEapis.com/youtube/v3/commentThreads?textFormat=plainText&part=snippet&maxResults=50&key=" +
  GOOGLE_API_KEY +
  "&videoId=";

export const kFormatter = (num) => {
  return Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
    : Math.sign(num) * Math.abs(num);
};
