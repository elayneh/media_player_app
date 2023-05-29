import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  songs: [],
};

const songSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    getSongsFetch(state) {
      state.loading = true;
    },
    getSongsSuccess(state, action) {
      state.songs = action.payload;
      state.loading = false;
    },
    addSong(state, action) {
      state.songs.push = [...state.songs, action.payload];
    },
    updateSong(state, action) {
      //     const sn = state.songs.map((song) =>
      //     song.id === action.payload.id ? action.payload : song
      //   )
      //   state.songs = sn;
      return action.payload;
    },
    deleteSong(state, action) {
      //    console.log('helo')
      // const songId = action.payload.id;
      // state.songs = state.songs.filter((item) => item.id !== songId);
      return state.songs.filter((song) => song.id !== action.payload);
    },
  },
});

export const songActions = songSlice.actions;
export const {
  getSongsFetch,
  getSongsSuccess,
  addSong,
  deleteSong,
  updateSong,
} = songSlice.actions;
export default songSlice;
