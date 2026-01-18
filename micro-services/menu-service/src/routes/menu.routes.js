const router = require("express").Router();

router.get("/:restaurantId", (req, res) => {
  const { restaurantId } = req.params;
  res.json([
    {
      id: 1,
      restaurantId: Number(restaurantId),
      name: "Dosa",
      price: 110,
      category: "Main course",
    },
    {
      id: 2,
      restaurantId: Number(restaurantId),
      name: "Idly",
      price: 70,
      category: "Main course",
    },
  ]);
});

module.exports = router;
