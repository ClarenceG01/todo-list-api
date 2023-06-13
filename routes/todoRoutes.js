const express = require("express");
const {
  getTasks,
  addTasks,
  home,
  updateTodo,
  singleTask,
  deleteTask,
} = require("../controllers/todoControllers");
let todoTasks = require("../data");

const router = express.Router();
// get 1
router.get("/", home);
// get 2
router.get("/tasks", getTasks);
// post
router.post("/tasks", addTasks);
// update a task
router.put("/tasks/:id", updateTodo);
// display a single task
router.get("/tasks/:id", singleTask);
//delete task
router.delete("/tasks/:id", deleteTask);
module.exports = { router };
