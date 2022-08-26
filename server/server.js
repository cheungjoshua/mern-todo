const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv/config");

// Import Route
const todosRoute = require("./routes/todos");

// Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.send("It is root, nothing here!");
});

app.use("/todos", todosRoute);

// Connect to DB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    console.log("conneted to DB");
  })
  .catch((err) => {
    console.log(err);
  });

// Listen Port
const port = 8080;

app.listen(port, () => {
  console.log("server start at 8080");
});
