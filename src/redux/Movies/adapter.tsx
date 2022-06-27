import {createEntityAdapter} from '@reduxjs/toolkit';
import {TMovie} from './model';

const adapter = createEntityAdapter<TMovie>({
  selectId: movie => movie.id,
});

export default adapter;
