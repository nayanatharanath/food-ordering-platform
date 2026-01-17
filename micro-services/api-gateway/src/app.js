const express = require("express");
const app = express();

app.use(express.json());

app.use("/health", require("./routes/health"));
app.use("/api/restaurants", require("./routes/restaurants.routes"));

module.exports = app;
