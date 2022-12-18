const express = require("express");
const router = express.Router();
const { getAllTasks,
  getSingleTask,
  updateTask,
  createTask,
  deleteTask, } = require("../controllers/tasks.js")


router.get("/",getAllTasks);

router.post("/",createTask);

router.get("/:id",getSingleTask);

router.patch("/:id",updateTask);

router.delete("/:id",deleteTask);

module.exports = router;