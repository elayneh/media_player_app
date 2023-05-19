import axios from "axios";

export const getSongAPI = async () =>
  await axios.get("https://media-player-app.vercel.app/getSongs");
export const postSongAPI = async (sendFile) => {
  const data = await axios.post(
    "https://media-player-app.vercel.app/addSongs",
    sendFile
  );
  return data;
};
export const deleteSongAPI = async (id) => {
  const data = await axios.delete(
    "https://media-player-app.vercel.app/deleteSong/" + id
  );
  return data;
};
export const updateSongAPI = async (id, artist) => {
  const data = axios.patch(
    "https://media-player-app.vercel.app/updateSongs/" + id,
    artist
  );
  return data;
};
