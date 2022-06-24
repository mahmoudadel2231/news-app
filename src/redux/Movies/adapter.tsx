import { createEntityAdapter } from "@reduxjs/toolkit";

const adapter = createEntityAdapter<any>({
  selectId: (movie) => movie.id,
});

export default adapter;
