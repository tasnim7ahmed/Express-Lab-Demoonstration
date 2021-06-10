const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes.routes");
const morgan = require("morgan");

const { logger, printSomething } = require("./middlewares/app.middlewares");

//app.use([logger, printSomething]);
app.use(morgan("tiny"));
app.use(express.static("public"));
app.use(userRoutes);
app.get("/", (req, res) => {
  //res.status(200).send("<H1>Home Page - GET Request</H1>");
  res.sendFile("home.html", { root: "./views" });
});

app.post("/", (req, res) => {
  res.status(200).send("<H1>Home Page - POST Request</H1>");
});

app.get("/about", (req, res) => {
  res.append("id", "154408");
  res.send("<H1>About Page</H1>");
});

app.get("/contact", (req, res) => {
  res.json({ name: "John Reese", profession: "N/A" });
});

app.use((req, res) => {
  res.status(401).send("Page doesn't exist!");
});
module.exports = app;
