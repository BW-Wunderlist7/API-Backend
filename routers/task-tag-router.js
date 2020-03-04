const express = require("express");
const taskTagModel = require("../models/model");
const middleware = require("../middleware/auth");
const router = express();

router.use(express.json());

router.post("/attach", (req, res) => {
  const task = req.body;
  const tag = req.body;
  console.log("task", task);
  taskTagModel
    .taskTag(task.task_id, tag.tag_id)
    .then(attached => {
      res.status(201).json({ success: "attached tag" });
    })
    .catch(err => {
      console.log("attach err", err);
      res.status(500).json({ errorMessage: "cannot attach tags at this time" });
    });
});

router.get("/task-tag", middleware, (req, res) => {
  const id = req.user.id;
  taskTagModel
    .getTasksTags(id)
    .then(task_tag => {
      res.status(200).json({ task_tag });
    })
    .catch(err => {
      console.log("get task and tags errror", err);
      res
        .status(500)
        .json({ errorMessage: "cannot get task and tags at this time" });
    });
});

module.exports = router;
