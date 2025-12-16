import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "dcc827019b68b7114ef1086f08eef13b";

const key = `api_key=${API_KEY}`;

export const getPopularMovies = async () => {
  const res = await axios.get(`${BASE_URL}movie/popular?${key}`);
  return res.data.results;
};
export const findMovie = async (name) => {
  const res = await axios.get(`${BASE_URL}search/movie?${key}&query=${name}`);
  return res.data.results;
};
export const getMovieById = async (id) => {
  const res = await axios.get(`${BASE_URL}movie/${id}?api_key=${API_KEY}`);
  return res.data;
};
export const getCast = async (id) => {
  const res = await axios.get(
    `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}`
  );
  return res.data.cast;
};
export const getReviews = async (id) => {
  const res = await axios.get(
    `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}`
  );
  return res.data.results;
};
