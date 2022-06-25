import {createAsyncThunk} from '@reduxjs/toolkit';
import {normalize, schema} from 'normalizr';
import {bool} from 'yup';
import {MoviesSchema} from '../schema';
import MoviesAPI from './services';

export const fetchMoviesList = createAsyncThunk(
  'articles/fetchArticles',
  async (params: {page: number; refresh: boolean}, thunkAPI) => {
    try {
      const response = await MoviesAPI.getMovies(params);
      const normalized = normalize(response?.data?.results, MoviesSchema.list);
      return {
        ...normalized,
        page: response.data?.page,
        refresh: params.refresh,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue('error');
    }
  },
);
