import axios from "axios";
import assign from "lodash/assign";
import set from "lodash/set";

import type { TStore } from "./store";

const initAxios = (store: TStore) => {
  store;

  axios.defaults.baseURL = "https://api.themoviedb.org/3/";

  axios.interceptors.response.use(undefined, (error) => {
    return Promise.reject(error?.response);
  });
};

export default initAxios;
