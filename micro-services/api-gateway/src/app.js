const express = require("express");
const app = express();

app.use(express.json());

app.use("/health", require("./routes/health"));
app.use("/api/restaurants", require("./routes/restaurants.routes"));
app.use("/api/menu", require("./routes/menu.routes"));

module.exports = app;
