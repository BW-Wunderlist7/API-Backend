require("dotenv").config();
const cloudinary = require("cloudinary");
const express = require("express");
const avatarModel = require("../models/model");
const cloudStorage = require("multer-storage-cloudinary");
const multer = require("multer");
const middleware = require("../middleware/auth");
const router = express();

router.use(express.json());

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

const storage = cloudStorage({
  cloudinary: cloudinary,
  folder: "wunderlist",
  allowedFormats: ["jpg", "png"],
  transformation: [{ width: 500, height: 500, crop: "limit" }]
});

const parser = multer({ storage: storage });

router.post(
  "/avatar/upload",
  parser.single("image"),
  middleware,
  (req, res) => {
    const id = req.user.id;
    console.log("id", id);
    const image = req.file.url;
    console.log("url", image);
    avatarModel
      .addAvatar(id, image)
      .then(picture => {
        console.log({ picture });
        res.status(201).json({ success: "Avatar has been uploaded" });
      })
      .catch(err => {
        console.log("post avatar error", err);
        res.status(500).json({ errorMessage: "cannot add avatar" });
      });
  }
);

router.get("/avatar/:id", (req, res) => {
  const { id } = req.params;
  avatarModel
    .avatarURL({ id })
    .then(url => {
      if (!url.length) {
        res.status(404).json({
          message: "The avatar with the specified ID does not exist."
        });
      } else {
        res.status(200).json({ url });
      }
    })
    .catch(err => {
      res.status(500).json({ errorMessage: "cannot get avatar url" });
    });
});

router.get("/avatar", (req, res) => {
  avatarModel
    .avatar()
    .then(all => {
      res.status(200).json({ all });
    })
    .catch(error => {
      res.status(500).json({ errorMessage: "error" });
    });
});

router;

module.exports = router;
