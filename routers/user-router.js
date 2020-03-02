const express = require("express");
const userModel = require("../models/model");
const bcrypt = require("bcryptjs");
const generateToken = require("../token/token-generator");
const authMiddleware = require("../middleware/auth");
const helmet = require("helmet");
const router = express();
router.use(helmet());

router.get("/users", authMiddleware, (req, res) => {
  userModel
    .getUsers()
    .then(users => {
      res.status(200).json({ users });
    })
    .catch(err => {
      console.log("get users error", err);
      res.status(500).json({ errorMessage: "cannot get users at this time" });
    });
});

router.post("/register", (req, res) => {
  const credentials = req.body;
  const hash = bcrypt.hashSync(credentials.password, 12);
  credentials.password = hash;
  userModel
    .register(credentials)
    .then(newUser => {
      res.status(201).json({ message: `Welcome to Wunderlist!` });
    })
    .catch(err => {
      console.log("register error", err);
      res
        .status(500)
        .json({ errorMessage: `Error registering users at this time` });
    });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  userModel
    .login({ email })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({ token });
      } else {
        res.status(401).json({ message: `Invalid credentials` });
      }
    })
    .catch(err => {
      console.log("login error", err);
      res.status(500).json({ errorMessage: `Error logging in` });
    });
});

module.exports = router;
