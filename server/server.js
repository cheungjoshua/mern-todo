const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");

require("dotenv/config");

// Import Route
const todosRoute = require("./routes/todos");

// Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/todos", todosRoute);

// Connect to DB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log("conneted to DB"))
  .catch((err) => console.log(err));

// Listen Port

app.listen(process.env.PORT || 8080, () => {
  console.log(`server start at ${process.env.PORT}`);
});
