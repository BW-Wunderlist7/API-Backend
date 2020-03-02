const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const server = express();

// make sure that helmet is hiding the powered by
server.use(helmet());
server.use(cors());
server.use(express.json());

//add in the routers here once built

server.get("/", (req, res) => {
  res.json({ message: "SERVER IS LIVE" });
});

module.exports = server;
