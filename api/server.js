require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("connected to Database"));

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

const songsRouter = require("./routes/songs");
app.use("/songs", songsRouter);

app.listen(8000, () => console.log("Server Started"));
