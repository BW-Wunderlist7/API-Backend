const express = require("express");
const cors = require("cors");
const userRouter = require("./routers/user-router");
const taskRouter = require("./routers/task-router");
const profileRouter = require("./routers/profile-router");
const tagRouter = require("./routers/tag-router");
const server = express();

// make sure that helmet is hiding the powered by
server.use(express.json());
server.use(cors());
server.use("/api", userRouter);
server.use("/api", taskRouter);
server.use("/api", profileRouter);
server.use("/api", tagRouter);

//add in the routers here once built

server.get("/", (req, res) => {
  res.json({ message: "SERVER IS LIVE" });
});

// const port = 6300;
const PORT = process.env.PORT || 6300;

server.listen(PORT, () => {
  console.log(`server is up and running on port ${PORT}`);
});
