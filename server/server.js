const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv/config");

const PASSWORD = process.env.DB_USER_PASSWORD;
const USER = process.env.DB_USER;

// Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Import Route
const todosRoute = require("./routes/todos");

// Routes
app.get("/", (req, res) => {
  res.send("It is root, nothing here!");
});

app.use("/todos", todosRoute);

// Connect to DB
mongoose.connect(
  `mongodb+srv://${USER}:${PASSWORD}@cluster0.w7eg26k.mongodb.net/todoDB`,
  { useNewUrlParser: true },
  () => {
    console.log("conneted to DB");
  }
);

// Listen Port
const port = 8080;

app.listen(port, () => {
  console.log("server start at 8080");
});
