const express = require("express");
const { users } = require("./model/index");
const app = express();

// requiring database
require("./model/index");

// pasrsing form Data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // res.send("<h2>I am on home page</h2>");
  res.render("home.ejs", { name: "Ankit", age: 18 });
});

// POST method
app.post("/register", async (req, res) => {
  console.log(req.body);
  const { name, password } = req.body;
  await users.create({
    name: name,
    password: password,
  });
  res.redirect("/about");
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
