// const express = require("express");
const mongoose = require("mongoose");
const Items = require("../models/itemModel");
const multer = require("multer");
const path = require("path");

const handleErrors = (error) => {
  const errors = {};
  if (error.code === 11000) {
    errors.error = "Item exists";
    return errors;
  }
  if (error.message === "Enter item") {
    errors.error = "required";
    return errors;
  }
  if (error.message.includes("Music validation failed")) {
    Object.values(error.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

// Upload file
const storage = multer.diskStorage({
  destination: "./public/uploads/",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const uploads = multer({
  storage: storage,
});
const getItems = async (req, res) => {
  try {
    const ItemsList = await Item.find({}).sort({ updatedAt: -1 });
    res.status(200).send(ItemsList);
  } catch (error) {
    const errors = handleErrors(error);
    res.status(200).send(errors);
  }
};

const addItem = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "This field is required" });
  }
  const Item = req.file.filename;

  const { artist } = req.body;
  try {
    const createdItem = await Items.create({
      Item,
      artist,
    });
    res.status(200).send(createdItem);
  } catch (error) {
    const errors = handleErrors(error);
    res.status(400).send(errors);
  }
};
const updateItem = async (req, res) => {
  const { id } = req.params;
  let artist = req.body.changedValue;
  if (artist === "") {
    artist = "Unknown";
  }
  try {
    const updatedItem = await Items.findByIdAndUpdate({
      _id: id,
      artist,
      new: true,
    });
    const ItemsList = await Items.find({}).sort({ updatedAt: -1 });
    res.status(200).send({ updatedItem, ItemsList });
  } catch (error) {
    const errors = handleErrors(error);
    res.status(200).send(errors);
  }
};
const deleteItem = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    console.log("Error");
    return res.status(400).json({ error: "File not found" });
  }
  try {
    const deletedItem = await Items.findByIdAndDelete({ _id: id });
    res.status(200).send(deletedItem);
  } catch (error) {
    const errors = handleErrors(error);
    res.status(200).send(errors);
  }
};
module.exports = { getItems, addItem, updateItem, deleteItem, uploads };
