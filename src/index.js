const express = require("express");
require("./db/mongoose");
const userRouter = require("../src/routers/user");
const taskRouter = require("../src/routers/task");
const User = require("./models/user");
const Task = require("./models/task");

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);
 
app.listen(port, () => {
  console.log("port is on " + port);
});
