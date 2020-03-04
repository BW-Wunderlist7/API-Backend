const express = require("express");
const taskModel = require("../models/model");
const middleware = require("../middleware/auth");
const router = express();

router.get("/tasks", middleware, (req, res) => {
  const id = req.user.id;
  taskModel
    .getTasks(id)
    .then(task => {
      res.status(200).json({ task });
    })
    .catch(err => {
      console.log("get tasks error", err);
      res.status(500).json({ errorMessage: `cannot get tasks at this time` });
    });
});

router.get("/tasks/:id", (req, res) => {
  const { id } = req.params;
  taskModel
    .getTaskId({ id })
    .then(task => {
      res.status(200).json({ task });
    })
    .catch(err => {
      console.log("get tasks error", err);
      res
        .status(500)
        .json({ errorMessage: `cannot get task by id at this time` });
    });
});

router.post("/tasks", middleware, (req, res) => {
  const newTask = req.body;
  const id = req.user.id;
  taskModel
    .addTask(id, newTask)
    .then(task => {
      res.status(201).json({ message: `your task has been created` });
    })
    .catch(err => {
      console.log("get tasks error", err);
      res
        .status(500)
        .json({ errorMessage: `cannot post task by id at this time` });
    });
});

router.put("/tasks/:id", (req, res) => {
  const { id } = req.params;
  const update = req.body;
  taskModel
    .updateTask({ id }, update)
    .then(task => {
      res.status(200).json({ message: `your task has been updated` });
    })
    .catch(err => {
      console.log("edit task error", err);
      res
        .status(500)
        .json({ errorMessage: `cannot edit task by id at this time` });
    });
});

router.delete("/task/:id", (req, res) => {
  const { id } = req.params;
  taskModel
    .removeTask({ id })
    .then(remove => {
      res.status(200).json({ remove });
    })
    .catch(err => {
      console.log("remove task error", err);
      res
        .status(500)
        .json({ errorMessage: `cannot remove task by id at this time` });
    });
});

module.exports = router;
