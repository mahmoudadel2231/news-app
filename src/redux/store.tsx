import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import initAxios from "./_axios";
import reducer from "./reducers";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["_checkup"],
};

const middlewares = getDefaultMiddleware({
  thunk: {
    extraArgument: {},
  },
  serializableCheck: {
    ignoredActionPaths: ["meta.arg", "payload.config", "payload.request"],
  },
});

const store = configureStore({
  reducer: reducer,
  middleware: middlewares,
});

initAxios(store);

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export type TStore = typeof store;
export type RootState = ReturnType<typeof reducer>;
export default store;
