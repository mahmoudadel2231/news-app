import { createAsyncThunk } from "@reduxjs/toolkit";
import { normalize, schema } from "normalizr";
import { MoviesSchema } from "../schema";
import MoviesAPI from "./services";

export const fetchMoviesList = createAsyncThunk(
  "articles/fetchArticles",
  async (params, thunkAPI) => {
    try {
      const response = await MoviesAPI.getMovies(params);
      const normalized = normalize(response?.data?.results, MoviesSchema.list);
      console.log("normalized", normalized);
      return { ...normalized };
    } catch (error) {
      return thunkAPI.rejectWithValue("error");
    }
  }
);
