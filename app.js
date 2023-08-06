const express = require("express");
const app = express();

// requiring database
require("./model/index");

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // res.send("<h2>I am on home page</h2>");
  res.render("home.ejs", { name: "Ankit", age: 18 });
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.listen(3000, function () {
  console.log("Node js project has been started\n");
  // git -rm --cached node_modules
});
