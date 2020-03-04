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

//⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇ GET TAG BY ID ⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇
router.get("/tags/:id", (req, res) => {
  const { id } = req.params;
  tagModel
    .getTagId({ id })
    .then(tag => {
      if (!tag.length) {
        res
          .status(404)
          .json({ message: "The tag with the specified ID does not exist." });
      } else {
        res.status(200).json({ tag });
      }
    })
    .catch(err => {
      console.log("get tag by id error", err);
      res
        .status(500)
        .json({ errorMessage: `cannot get tag by id at this time` });
    });
});
// ⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆

router.post("/tags", (req, res) => {
  const newTag = req.body;
  tagModel
    .addTag(newTag)
    .then(tag => {
      res.status(201).json({ success: "tag created" });
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
