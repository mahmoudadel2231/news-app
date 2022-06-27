import axios from 'axios';

const getMovies = (params: any) =>
  axios.get(`movie/popular?page=${params?.page}`);

const searchMovies = (params: any) =>
  axios.get(`search/movie?query=${params?.query}&page=${params?.page}`);

const MoviesAPI = {
  getMovies,
  searchMovies,
};

export default MoviesAPI;
