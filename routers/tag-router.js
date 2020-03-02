const express = require("express");
const tagModel = require("../models/model");
const router = express();

router.get("/tags", (req, res) => {
  tagModel
    .getTags()
    .then(tag => {
      res.status(200).json({ tag });
    })
    .catch(err => {
      console.log("get tags error", err);
      res.status(500).json({ errorMessage: "cannot get tags from database" });
    });
});

router.post("/tags", (req, res) => {
  const newTag = req.body;
  console.log(req.body);
  tagModel
    .addTag(newTag)
    .then(tag => {
      res.status(201).json({ tag });
    })
    .catch(err => {
      console.log("post tags error", err);
      res.status(500).json({ errorMessage: "cannot post tags to database" });
    });
});

router.put("/tags/:id", (req, res) => {
  const { id } = req.params;
  const updateTag = req.body;
  tagModel
    .updateTag({ id }, updateTag)
    .then(updatedTag => {
      res.status(200).json({ message: "your tag has been updated" });
    })
    .catch(err => {
      console.log("edit tags error", err);
      res.status(500).json({ errorMessage: "cannot edit tags at this time" });
    });
});

router.delete("/tags/:id", (req, res) => {
  const { id } = req.params;
  tagModel
    .removeTag({ id })
    .then(erase => {
      res.status(200).json({ erase });
    })
    .catch(err => {
      console.log("delete tags error", err);
      res.status(500).json({ errorMessage: "cannot delete tags at this time" });
    });
});

module.exports = router;
