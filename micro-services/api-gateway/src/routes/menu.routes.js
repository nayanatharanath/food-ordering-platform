const router = require("express").Router();
const menuService = require("../services/menu.service");

router.get("/:restaurantId", async (req, res, next) => {
  try {
    const { restaurantId } = req.params;
    const data = await menuService.getMenuForEachRestaurant(restaurantId);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
