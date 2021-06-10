const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const isLoggedIn = require("./../middlewares/auth.middlewares");
const {
  getRegister,
  postRegister,
  getLogin,
  getDashboard,
} = require("./../controllers/userController.controllers");

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get("/login", getLogin);

router.get("/dashboard", getDashboard);

router.route("/register").all(isLoggedIn).get(getRegister).post(postRegister);

module.exports = router;
