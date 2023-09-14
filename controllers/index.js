const router = require("express").Router();

router.use("/", require("./mainRoute"));

router.use("*", (req, res) => {
  res.render("home");
});

module.exports = router;
