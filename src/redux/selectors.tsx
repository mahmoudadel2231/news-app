import { AsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "./reducers";

const useLoadingSelector = (action) => {
  const { typePrefix } = action;
  return useSelector((state: RootState) => state._loading[typePrefix]) || false;
};

export { useLoadingSelector };
