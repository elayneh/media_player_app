import { configureStore } from "@reduxjs/toolkit";
import songSlice from "./slice/songslice";

import createSagaMiddleware from "@redux-saga/core";
import Saga from "../Components/sagas";

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    songs: songSlice.reducer,
  },
  middleware: [saga],
});

saga.run(Saga.songSaga);
saga.run(Saga.addSongSaga);
saga.run(Saga.updateSongSaga);
saga.run(Saga.deleteSongSaga);

export default store;
