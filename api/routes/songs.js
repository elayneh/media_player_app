const express = require("express");
const router = express.Router();
const Song = require("../model/songs");

// Getting all songs

router.get("/", async (req, res) => {
  try {
    const songs = await Song.find({});
    res.send(songs);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Creating song

router.post("/", async (req, res) => {
  const song = new Song({
    title: req.body.title,
    artist: req.body.artist,
    album: req.body.album,
    genre: req.body.genre,
  });
  try {
    const newSong = await song.save();
    res.status(201).json(newSong);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// updating by id

router.patch("/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["title", "artist", "album", "genre"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }

  try {
    const song = await Song.findById(req.params.id);

    if (!song) {
      return res.status(404).send();
    }

    updates.forEach((update) => (song[update] = req.body[update]));
    await song.save();
    res.send(song);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Deleting by id

router.delete("/:id", async (req, res) => {
  try {
    const song = await Song.findByIdAndDelete(req.params.id);

    if (!song) {
      return res.status(404).send();
    }

    res.send("song deleted");
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Statstics
router.get("/statstics", async (req, res) => {
  try {
    const totalSongs = await Song.countDocuments();
    const totalArtists = await Song.distinct("artist").countDocuments();
    const totalAlbums = await Song.distinct("album").countDocuments();
    const totalGenres = await Song.distinct("genre").countDocuments();

    const songsByGenre = await Song.aggregate([
      { $group: { _id: "$genre", count: { $sum: 1 } } },
    ]);

    const songsByArtist = await Song.aggregate([
      {
        $group: {
          _id: "$artist",
          count: { $sum: 1 },
          albums: { $addToSet: "$album" },
        },
      },
    ]);

    const songsByAlbum = await Song.aggregate([
      { $group: { _id: "$album", count: { $sum: 1 } } },
    ]);

    res.send({
      totalSongs,
      totalArtists,
      totalAlbums,
      totalGenres,
      songsByGenre,
      songsByArtist,
      songsByAlbum,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
});


router.get("/:id", async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);
    if (!song) {
      return res.status(404).json({ error: "Song not found" });
    }
    res.json(song.title);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
