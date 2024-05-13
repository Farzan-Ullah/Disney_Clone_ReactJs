import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "6f961f13ec92520c5587faeaadb39e37";

const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=6f961f13ec92520c5587faeaadb39e37";

const getTrendingVideos = axios.get(
  movieBaseUrl + "/trending/all/day?api_key=" + api_key
);
const getMovieByGenreId = (id) =>
  axios.get(movieByGenreBaseURL + "&with_genres=" + id);

export default {
  getTrendingVideos,
  getMovieByGenreId,
};
