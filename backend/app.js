const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const usersRoute = require("./route/usersRoute");
const postRoute = require("./route/postRoute");

const app = express();

app.use(cors());
app.use(express.json());

app.use(morgan("dev"));
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use("/api/diatoz/v0/users", usersRoute);
app.use("/api/diatoz/v0/posts", postRoute);

module.exports = app;