const router = require("express").Router();
const restaurantService = require("../services/restaurants.service");

router.get("/", async (req, res, next) => {
  try {
    const data = await restaurantService.getRestaurants();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
