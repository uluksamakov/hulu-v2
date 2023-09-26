export const API_KEY = process.env.API_KEY;

export default {
  fetchTrending: {
    title: "Treding",
    url: `/trending/all/week?api_key=${API_KEY}&languange=en-US`,
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${API_KEY}&languange=en-US`,
  },
  fetchActionMovies: {
    title: "Action",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  fetchComedyMovies: {
    title: "Comedy",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  fetchHorrorMovies: {
    title: "Horror",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  fetchRomanceMovies: {
    title: "Romance",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  fetchMystery: {
    title: "Mystery",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=9684`,
  },
  fetchSciFi: {
    title: "Sci-FI",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  },
  fetchWestern: {
    title: "Western",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
  },
  fetchAnimation: {
    title: "Animation",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  },
  fetchTV: {
    title: "TV Movie",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
  },
};

export const fetchRequest = [
  {
    fetchRequest: "fetchTrending",
    url: `/trending/all/week?api_key=${API_KEY}&languange=en-US`,
  },
  {
    fetchRequest: "fetchTopRated",
    url: `/movie/top_rated?api_key=${API_KEY}&languange=en-US`,
  },
  {
    fetchRequest: "fetchActionMovies",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  {
    fetchRequest: "fetchComedyMovies",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  {
    fetchRequest: "fetchHorrorMovies",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  {
    fetchRequest: "fetchRomanceMovies",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  {
    fetchRequest: "fetchMystery",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=9684`,
  },
  {
    fetchRequest: "fetchSciFi",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  },
  {
    fetchRequest: "fetchWestern",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
  },
  {
    fetchRequest: "fetchAnimation",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  },
  {
    fetchRequest: "fetchTV",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
  },
];
