import {AsyncThunk} from '@reduxjs/toolkit';
import {useSelector} from 'react-redux';

const useLoadingSelector = action => {
  const {typePrefix} = action;
  return useSelector((state: any) => state._loading[typePrefix]) || false;
};

export {useLoadingSelector};
