const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).json({ status: "Menu UP" });
});

module.exports = router;
