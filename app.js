const express = require("express");

const router = require("./router/blogRouter.js");

const app = express();

app.use(express.json());

app.use("/blogapi/blogs", router);

module.exports = app;