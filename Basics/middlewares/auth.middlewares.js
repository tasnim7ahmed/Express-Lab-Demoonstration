const isLoggedIn = (req, res, next) => {
  if (req.method == "POST") {
    const username = req.body.username;
    const email = req.body.email;
    if (username == "admin") {
      next();
    } else {
      res.redirect("/register");
    }
  } else {
    next();
  }
};

module.exports = isLoggedIn;
