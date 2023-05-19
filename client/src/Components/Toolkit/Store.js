import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import ItemSlice from "./Features/itemSlice";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "../Saga/itemSaga";
const SagaMiddleware = createSagaMiddleware();
export const Store = configureStore({
  reducer: {
    Items: ItemSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false, serializableCheck: false }).concat(
      SagaMiddleware
    ),
});
SagaMiddleware.run(rootSaga);
