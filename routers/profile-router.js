const express = require("express");
const profileModel = require("../models/model");
const helmet = require("helmet");
const router = express();
router.use(helmet());

router.get("/profile", (req, res) => {
  profileModel
    .getProfile()
    .then(profile => {
      res.status(200).json({ profile });
    })
    .catch(err => {
      console.log(`get profile error`, err);
      res
        .status(500)
        .json({ errorMessage: `cannot get user profile at this time` });
    });
});

router.post("/profile", (req, res) => {
  const profile = req.body;
  profileModel
    .addProfile(profile)
    .then(profileData => {
      res.status(201).json({ message: `profile has been updated` });
    })
    .catch(err => {
      console.log("post error", err);
      res.status(500).json({ errorMessage: `error adding profile details` });
    });
});

router.put("/profile/:id", (req, res) => {
  const { id } = req.params;
  const newProfile = req.body;
  profileModel
    .updateProfile({ id }, newProfile)
    .then(updated => {
      res
        .status(201)
        .json({ message: `successfully edited your profile data` });
    })
    .catch(err => {
      console.log("edit profile error", err);
      res
        .status(500)
        .json({ errorMessage: `error attempting to edit profile data` });
    });
});

router.delete("/profile/:id", (req, res) => {
  const { id } = req.params;
  profileModel
    .removeProfile({ id })
    .then(erase => {
      res.status(201).json({ erase });
    })
    .catch(err => {
      console.log("delete profile error", err);
      res
        .status(500)
        .json({ errorMessage: `error attempting to delete profile data` });
    });
});

module.exports = router;
