const axios = require("axios");

const MENU_SERVICE_URL =
  process.env.MENU_SERVICE_URL || "http://localhost:4002";

async function getMenuForEachRestaurant(restaurantId) {
  const response = await axios.get(`${MENU_SERVICE_URL}/menu/${restaurantId}`);
  return response.data;
}

module.exports = { getMenuForEachRestaurant };
