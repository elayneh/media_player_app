import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { addSong, deleteSong, getSongsSuccess } from "../store/slice/songslice";
import axios from "axios";

function* workGetSongsFetch() {
  const songs = yield call(() =>
    fetch("https://media-player-app.onrender.com/songs")
  );
  const formattedSongs = yield songs.json();

  yield put(getSongsSuccess(formattedSongs));
}

function* addSongToServer() {
  const songs = yield call(() =>
    axios.post("https://media-player-app.onrender.com/songs")
  );
  const addedSong = yield songs.json();
  yield put(addSong(addedSong));
}

function* updateSongOnServer(action) {
  const { title, album, artist, genre } = action.payload;
  const songs = yield call(() =>
    axios.patch(
      `https://media-player-app.onrender.com/songs/${action.payload.id}`,
      {
        title,
        album,
        artist,
        genre,
      }
    )
  );
  const updateSong = yield songs.json();

  yield put(updateSong(updateSong));
}

function* deleteSongFromServer(action) {
  console.log(action.payload);
  try {
    yield call(
      axios.delete,
      `https://media-player-app.onrender.com/songs/${action.payload.id}`
    );
    yield put(deleteSong);
  } catch (error) {
    yield put(deleteSong);
  }
}

function* songSaga() {
  yield takeEvery("songs/getSongsFetch", workGetSongsFetch);
}

function* addSongSaga() {
  yield takeLatest("songs/addSong", addSongToServer);
}

function* updateSongSaga() {
  yield takeLatest("songs/updateSong", updateSongOnServer);
}

function* deleteSongSaga() {
  yield takeLatest("songs/deleteSong", deleteSongFromServer);
}

const Saga = { songSaga, addSongSaga, updateSongSaga, deleteSongSaga };
export default Saga;
