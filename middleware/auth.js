const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../token/token-secret");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (authorization) {
    jwt.verify(authorization, jwtSecret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: "No entry!" });
      } else {
        res.decodedToken = decodedToken;
        next();
      }
    });
  } else {
    res.status(400).json({ message: "No / wrong credentials provided" });
  }
};
