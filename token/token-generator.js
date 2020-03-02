require("dotenv").config();
const jwt = require("jsonwebtoken");
const { jwtSecret } = require("./token-secret");

function tokenGenerator(user) {
  const payload = {
    userId: user.id,
    userEmail: user.email
  };

  const options = {
    expiresIn: "8h"
  };
  return jwt.sign(payload, jwtSecret, options);
}

module.exports = tokenGenerator;
