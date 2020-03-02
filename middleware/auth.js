const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../token/token-secret");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (authorization) {
    jwt.verify(authorization, jwtSecret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: "Token is invalid" });
      } else {
        req.user = { id: decodedToken.userId };
        next();
      }
    });
  } else {
    res.status(401).json({ errorMessage: "Your token is missing" });
  }
};
