const express = require("express");
const router = express.Router();
const {
  getLogin,
  getRegister,
  postLogin,
  postRegister,
} = require("./../controllers/users.controller");

router.get("/login", getLogin);
router.post("/login", postLogin);
router.get("/register", getRegister);
router.post("/register", postRegister);
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
