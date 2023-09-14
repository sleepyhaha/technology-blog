const router = require("express").Router();
const mainRoute = require("./mainRoute.js");

router.use("/", mainRoute);

router.use("*", (req, res) => {
  res.render("home");
});

module.exports = router;
