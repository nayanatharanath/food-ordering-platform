const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).json({ status: "Restaurant UP" });
});

module.exports = router;
