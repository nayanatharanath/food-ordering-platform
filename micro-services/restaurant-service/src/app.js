const express = require("express");
const app = express();

const errorHandler = require("./middlewares/errorHandler");

app.use(express.json());

app.use("/restaurants", require("./routes/restaurants"));
app.use("/health", require("./routes/health"));
app.use(errorHandler);

module.exports = app;
