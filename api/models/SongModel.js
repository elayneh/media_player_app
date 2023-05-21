const mongoose = require("mongoose");

const songsModel = mongoose.Schema(
  {
    song: {
      type: String,
      required: [true, "Please Enter The Song."],
    },
    artist:{
      type:String,
      default:'Unknown Artist'
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Music", songsModel);
