const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).json({ status: "UP", service: "api-gateway" });
});

module.exports = router;
