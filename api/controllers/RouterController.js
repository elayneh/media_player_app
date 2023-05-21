// const express = require("express");
const mongoose = require("mongoose");
const Songs = require("../models/SongModel");
const multer = require("multer");
const path = require("path");

const handleErrors = (error) => {
  const errors = {
    // error:''
  };
  if (error.code === 11000) {
    errors.error = "File Is Already Exists";
    return errors;
  }
  if(error.message === 'Please Enter File'){
    errors.error = 'Please Enter File';
    return errors
  }
  if (error.message.includes("Music validation failed")) {
    Object.values(error.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
      // console.log(properties)
    });
  }
  return errors;
};
const storage = multer.diskStorage({
  destination: "./public/uploads/",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const uploads = multer({
  storage: storage,
});
const getSongs = async (req, res) => {
  try {
    const songsList = await Songs.find({}).sort({ updatedAt: -1 });
    res.status(200).send(songsList);
  } catch (error) {
    const errors = handleErrors(error);
    res.status(200).send(errors);
  }
};

const addSong = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({error:'Please Enter File'}) 
  }
  const song = req.file.filename;

  console.log(req.body);
  // const { artist } = req.body;
  const songName = req.file.filename.split('.')[0];
  console.log(song)
  try {
    const createdSong = await Songs.create({
      song,
      artist:songName,
    });
    console.log(createdSong);
    res.status(200).send(createdSong);
  } catch (error) {
    const errors = handleErrors(error);
    console.log(error);
    res.status(400).send(errors);
  }
};
const updateSong = async (req, res) => {
  const { id } = req.params;
  let artist = req.body.changedValue;
  if(artist.length === 0){
    artist = 'Unknown Artist'
  }
  try {
    const updatedSong = await Songs.findByIdAndUpdate(
      { _id: id },
      {
        artist,
      },
      {
        new: true,
      }
    );
    const songsList = await Songs.find({}).sort({ updatedAt: -1 });

    res.status(200).send({ updatedSong, songsList });
  } catch (error) {
    const errors = handleErrors(error);
    res.status(200).send(errors);
  }
};
const deleteSong = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  if (!mongoose.Types.ObjectId.isValid(id)) {
    console.log("id error");
    return res.status(400).json({ error: "there is no such Song." });
  }
  try {
    const deletedSong = await Songs.findByIdAndDelete({ _id: id });
    console.log(deleteSong);
    res.status(200).send(deletedSong);
  } catch (error) {
    const errors = handleErrors(error);
    res.status(200).send(errors);
  }
};
module.exports = { getSongs, addSong, updateSong, deleteSong, uploads };
