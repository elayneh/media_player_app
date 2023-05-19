const mongoose = require("mongoose");
const Item = mongoose.Schema(
  {
    item: {
      type: String,
      required: [true, "Enter item"],
    },
    artist: {
      type: String,
      default: "Unknown",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Song", Item);
