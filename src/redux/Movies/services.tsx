import axios from 'axios';

const getMovies = (params: any) =>
  axios.get(
    `movie/popular?api_key=b6b9df07603489844f5c145b0489c20f&language=en-US&page=${params?.page}`,
  );

const searchMovies = (params: any) =>
  axios.get(
    `search/movie?api_key=b6b9df07603489844f5c145b0489c20f&query=${params?.query}&page=${params?.page}`,
  );

const MoviesAPI = {
  getMovies,
  searchMovies,
};

export default MoviesAPI;
