const express = require("express");
const router = express.Router();
const ensureAuthenticated = require("./../middlewares/auth.middleware");

router.get("/", (req, res) => {
  res.render("welcome.ejs");
});

router.get("/dashboard", ensureAuthenticated, (req, res) => {
  res.render("dashboard.ejs", { user: req.user });
});

module.exports = router;
