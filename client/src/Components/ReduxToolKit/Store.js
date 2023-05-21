import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import SongSlice from "./Features/SongSlice";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "../ReduxSaga/SongSaga";
const SagaMiddleware = createSagaMiddleware();
export const Store = configureStore({
  reducer: {
    Songs: SongSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false, serializableCheck: false }).concat(
      SagaMiddleware
    ),
});
SagaMiddleware.run(rootSaga);
