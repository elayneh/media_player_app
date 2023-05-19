import { call, put, takeEvery } from "redux-saga/effects";
import { ADD_ITEM, DELETE_ITEM, GET_ITEM, UPDATE_ITEM } from "./ActionTypes";
import {
  deleteSongAPI,
  getSongAPI,
  postSongAPI,
  updateSongAPI,
} from "./SongAPI";
import {
  addSong,
  deleteSong,
  getSongs,
  playCurrent,
} from "../../Toolkit/Features/itemSlice";

export function* getSongSaga() {
  const { data } = yield getSongAPI();
  yield put(getSongs(data));
}
export function* addSongSaga(action) {
  const { data } = yield call(postSongAPI, action.formData);
  yield put(addSong(data));
}
export function* updateSongSaga(action) {
  const { data } = yield call(updateSongAPI, action.id, action.artist);
  yield put(playCurrent(data.updatedSong));
  yield put(getSongs(data.songsList));
}
export function* deleteSongSaga(action) {
  const { data } = yield call(deleteSongAPI, action.id);
  yield put(deleteSong(data));
}

export function* wactchSongAsync() {
  yield takeEvery(ADD_ITEM, addSongSaga);
  yield takeEvery(GET_ITEM, getSongSaga);
  yield takeEvery(UPDATE_ITEM, updateSongSaga);
  yield takeEvery(DELETE_ITEM, deleteSongSaga);
}
