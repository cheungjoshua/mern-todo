const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");

// GET ALL TODOS
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET SPECIFIC TODO
router.get("/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    res.status(200).json(todo);
  } catch (err) {
    res.status(200).json(err);
  }
});

// SUBMIT TODO
router.post("/", async (req, res) => {
  const todo = new Todo({
    todo: req.body.todo,
  });
  try {
    const savedTodo = await todo.save();
    res.status(200).json(savedTodo);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE TODO - Complete or not
router.patch("/:id", async (req, res) => {
  try {
    const updatedTodo = await Todo.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    console.log(req.body);
    res.status(200).json(updatedTodo);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE TODO
router.delete("/:id", async (req, res) => {
  try {
    const deletedTodo = await Todo.remove({ _id: req.params.id });
    res.status(200).json(deletedTodo);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
