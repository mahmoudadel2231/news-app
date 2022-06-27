import {combineReducers} from '@reduxjs/toolkit';

import type {AnyAction} from '@reduxjs/toolkit';

import Movies from './Movies';
import loadingSlice from './_loading';

const reducers = {
  _loading: loadingSlice.reducer,
  [Movies.slice.name]: Movies.slice.reducer,
};

const combinedReducer = combineReducers(reducers);

const rootReducer = (state: any, action: AnyAction) => {
  return combinedReducer(state, action);
};

export default rootReducer;
