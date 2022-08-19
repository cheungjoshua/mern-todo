const express = require("express");
const app = express();

const morgan = require("morgan");

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = 8080;

app.get("/", (req, res) => {
  res.send("root ");
});

app.listen(port, () => {
  console.log("server start at 8080");
});
