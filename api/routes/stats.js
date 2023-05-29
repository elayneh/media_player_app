
const express = require('express');
const router = express.Router();
const Song = require('../models/song');

// get total number of songs, artists, albums, genres
router.get('/stats', async (req, res) => {
  try {
    const songs = await Song.find({});
    const artists = [...new Set(songs.map((song) => song.artist))];
    const albums = [...new Set(songs.map((song) => song.album))];
    const genres = [...new Set(songs.map((song) => song.genres))];

} catch (err) {
  res.status(500).send(err);
}
})
    