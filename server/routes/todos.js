const express = require("express");
const { model } = require("mongoose");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("it is get post root");
});

module.exports = router;
