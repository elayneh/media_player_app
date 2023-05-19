const express = require("express");
const router = express.Router();

const {
  getItems,
  addItem,
  updateItem,
  deleteItem,
  uploads,
} = require("../Controller/controller");

router.get("/getItems", getItems);
router.post("/addItems", uploads.single("file"), addItem);
router.patch("/updateItem/:id", updateItem);
router.delete("/deleteItem/:id", deleteItem);

module.exports = router;
