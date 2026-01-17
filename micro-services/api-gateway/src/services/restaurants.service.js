const axios = require("axios");

const RESTAURANT_SERVICE_URL =
  process.env.RESTAURANT_SERVICE_URL || "http://localhost:4001";

async function getRestaurants() {
  const response = await axios.get(`${RESTAURANT_SERVICE_URL}/restaurants`);
  return response.data;
}

module.exports = {
  getRestaurants,
};
