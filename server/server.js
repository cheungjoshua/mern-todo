const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv/config");

const PASSWORD = process.env.DB_USER_PASSWORD;
const USER = process.env.DB_USER;

//mid ware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Connect to DB
mongoose.connect(
  `mongodb+srv://${USER}:${PASSWORD}@cluster0.w7eg26k.mongodb.net/todoDB`,
  { useNewUrlParser: true },
  () => {
    console.log("conneted to DB");
  }
);

// Routes
app.get("/", (req, res) => {
  res.send("root ");
});

// Port
const port = 8080;

app.listen(port, () => {
  console.log("server start at 8080");
});
