const router = require("express").Router();

router.get("/", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Briyani zone",
      rating: 4.4,
      deliveryTime: "30 mins",
    },
  ]);
});

module.exports = router;
