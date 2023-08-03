const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h2>I am on home page</h2>");
});

app.get("/about", (req, res) => {
  res.send("I on about page");
});

app.get("/contact", (req, res) => {
  res.send("I am on contact page, nodemon working");
});

app.listen(3000, function () {
  console.log("Node js project has been started\n");
  // git -rm --cached node_modules
});
