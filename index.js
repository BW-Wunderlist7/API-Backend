require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { userRouter } = require("./routers");
const { taskRouter } = require("./routers");
const { profileRouter } = require("./routers");
const { tagRouter } = require("./routers");
const { avatarRouter } = require("./routers");
const helmet = require("helmet");
const server = express();

// make sure that helmet is hiding the powered by
server.use(express.json());
server.use(cors());
server.use(helmet());
server.use("/api", userRouter);
server.use("/api", taskRouter);
server.use("/api", profileRouter);
server.use("/api", tagRouter);
server.use("/api", avatarRouter);

//add in the routers here once built

server.get("/", (req, res) => {
  res.json({ message: "SERVER IS LIVE" });
});
module.exports = server;

const PORT = process.env.PORT || 8601;

server.listen(PORT, () => {
  console.log(`server is up and running on port ${PORT}`);
});
