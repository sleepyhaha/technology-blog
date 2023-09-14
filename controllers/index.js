const router = require("express").router();

router.use("/", require("./mainRoute"));

router.use("*", (req, res) => {
  res.render("home");
});

module.exports = router;
