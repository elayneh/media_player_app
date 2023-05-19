import { all } from "redux-saga/effects";
import axios from "axios";
import { wactchSongAsync } from "./Types/Sagas";

export function* rootSaga() {
  yield all([wactchSongAsync()]);
}
