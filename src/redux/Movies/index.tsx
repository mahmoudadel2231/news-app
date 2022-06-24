import { createSlice } from "@reduxjs/toolkit";
import { MoviesSchema } from "../schema";

import adapter from "./adapter";
import selectors from "./selectors";
import * as thunks from "./thunks";

const slice = createSlice({
  name: "movies",
  initialState: adapter.getInitialState({
    currentMovies: [],
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      Movies.thunks.fetchMoviesList.fulfilled,
      (state, action) => {
        // console.log("action.payload", action.payload);

        if (!action.payload.entities.movies) {
          state.currentMovies = [];
          return;
        }
        adapter.upsertMany(state, action.payload?.entities.movies);
        state.currentMovies = action.payload?.result;
      }
    );
  },
});

const Movies = {
  adapter,
  thunks,
  slice,
  schema: MoviesSchema,
  selectors,
};
export default Movies;
