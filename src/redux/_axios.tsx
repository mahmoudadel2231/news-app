import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, {AxiosRequestConfig} from 'axios';
import assign from 'lodash/assign';
import set from 'lodash/set';
import {setLanguage} from '../translations';

import type {TStore} from './store';

let langauge = 'en';

const initAxios = (store: TStore) => {
  store;

  axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
  const awaitToExecute = Promise.all([AsyncStorage.getItem('language')]);

  awaitToExecute.then(value => {
    setLanguage((value[0] as any) || langauge);
    axios.defaults.params = {
      api_key: 'b6b9df07603489844f5c145b0489c20f',
      language: value[0],
    };
  });

  axios.interceptors.response.use(undefined, error => {
    return Promise.reject(error?.response);
  });
};

export default initAxios;
