import axios from "axios";

export const getSongAPI = async () =>
  await axios.get("https://media-player-8aaz.onrender.com/getSongs");
export const postSongAPI = async (sendFile) => {
  const data = await axios.post(
    "https://media-player-8aaz.onrender.com/addSongs",
    sendFile
  );
  return data;
};
export const deleteSongAPI = async (id) => {
  const data = await axios.delete(
    "https://media-player-8aaz.onrender.com/deleteSong/" + id
  );
  return data;
};
export const updateSongAPI = async (id, artist) => {
  const data = axios.patch(
    "https://media-player-8aaz.onrender.com/updateSongs/" + id,
    artist
  );
  return data;
};
